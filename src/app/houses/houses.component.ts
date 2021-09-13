import { Component, OnInit } from '@angular/core';
import { House } from '../classes/house';
import { HouseService } from '../services/house.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HouseDetailComponent } from '../house-detail/house-detail.component';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  providers: [DecimalPipe],
})
export class HousesComponent implements OnInit {

  public houses: House[] = [];
  public showLoader: boolean = false;
  public page: number = 1;
  public totalNoOfPages = [...Array(46).keys()].slice(1);
  public filter = new FormControl('');
  public searchString!: string;
  public filteredHouses: Observable<House[]> | undefined;

  constructor(
    private houseService: HouseService,
    private router: Router,
    private modalService: NgbModal,
    ) { }

  async ngOnInit() {
    await this.getAllHouses();
    this.filteredHouses = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    );
  }

  public search(text: string): House[] {
    console.log(text);
    if (text.length < 1) {
      return this.houses;
    } else {
      const term = text.toLowerCase();
      return this.houses.filter(house => {
        const name = house.getName().toLowerCase();
        const region = house.getRegion().toLocaleLowerCase();
        const currentlord = house.getCurrentLord();

        return name.includes(term)
            || region.includes(term)
            || currentlord.includes(term)
    });
    }
}
  
  public async getAllHouses() {
    this.showLoader = true;
    for await (let page of this.totalNoOfPages) {
      await this.houseService.getHouses(page).subscribe(async houses => {
        for await (let house of houses) {
          this.houses.push(new House(house));
        }
      });
    }
    await this.houses.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.showLoader = false;
  }

  public openModal(house: House): Promise<void> {
    const modal = this.modalService.open(HouseDetailComponent);
    modal.componentInstance.house = house;
    return modal.result.then(async (result) => {
    }).catch(error => {
      this.router.navigateByUrl('/houses');
    });
    }
}

