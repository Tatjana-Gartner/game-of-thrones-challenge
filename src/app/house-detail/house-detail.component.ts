import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { House } from '../classes/house';
import { Character } from '../classes/character';
import { BookService } from '../services/book.service';
import { CharacterService } from '../services/character.service';
import { HouseService } from '../services/house.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  @Input() house: House | undefined;

  public showLoader: boolean = false;
  public currentLord!: Character;
  public currentLordName!: string;
  public heir!: Character;
  public heirName!: string;
  public overLord!: Character;
  public overLordName!: string;
  public founder!: Character;
  public founderName!: string;
  public cadetBranches: House[] = [];
  public swornMembers: Character[] = [];

  constructor(
    public modal: NgbActiveModal,
    public route: ActivatedRoute,
    public houseService: HouseService,
    public bookService: BookService,
    public characterService: CharacterService,
  ) { }

  ngOnInit() {
    this.getCurrentLord();
    this.getHeir();
    this.getOverLord();
    this.getFounder();
    this.getCadetBranches();
    this.getSwornMembers();
  }

  /**
   * Gets the characters name of the houses current lord.
   */
  private getCurrentLord() {
    if (this.house && this.house.getCurrentLord()) {
      this.showLoader = true;
      this.characterService.getCharacter(this.house.getCurrentLord()).subscribe(character => {
        this.currentLord = new Character(character);
        this.currentLordName = this.currentLord.getName();
        this.showLoader = false;
    }, error => {
      console.error(error);
      this.showLoader = false;
    });
    }
  }

  /**
   * Gets the characters name  of the houses heir.
   */
  private getHeir() {
    if (this.house && this.house.getHeir()) {
      this.showLoader = true;
      this.characterService.getCharacter(this.house.getHeir()).subscribe(character => {
        this.heir = new Character(character);
        this.heirName = this.heir.getName();
        this.showLoader = false;
    }, error => {
      console.error(error);
      this.showLoader = false;
    });
    }
  }

  /**
   * Gets the characters name of the houses over lord.
   */
  private getOverLord() {
    if (this.house && this.house.getOverlord()) {
      this.showLoader = true;
      this.characterService.getCharacter(this.house.getOverlord()).subscribe(character => {
        this.overLord = new Character(character);
        this.overLordName = this.overLord.getName();
        this.showLoader = false;
    }, error => {
      console.error(error);
      this.showLoader = false;
    });
    }
  }

  /**
   * Gets the characters name of the houses founder.
   */
  private getFounder() {
    if (this.house && this.house.getFounder()) {
      this.showLoader = true;
      this.characterService.getCharacter(this.house.getFounder()).subscribe(character => {
        this.founder = new Character(character);
        this.founderName = this.founder.getName();
        this.showLoader = false;
    }, error => {
      console.error(error);
      this.showLoader = false;
    });
    }
  }

  /**
   * Gets the houses names of cadet branches.
   */
  private getCadetBranches() {
    if (this.house && this.house.getCadetBranches().length !== 0) {
      this.showLoader = true;
      this.house.getCadetBranches().forEach(url => {
        this.houseService.getHouse(url).subscribe(house => {
          this.cadetBranches.push(new House(house));
        }, error => {
          console.error(error);
          this.showLoader = false;
        });
      });
      this.showLoader = false;
    }
  }

  /**
   * Gets the characters names of sworn members.
   */
  private getSwornMembers() {
    if (this.house && this.house.getSwornMembers().length !== 0) {
      this.showLoader = true;
      this.house.getSwornMembers().forEach(url => {
        this.characterService.getCharacter(url).subscribe(character => {
          this.swornMembers.push(new Character(character));
        }, error => {
          console.error(error);
          this.showLoader = false;
        });
      });
      this.showLoader = false;
    }
  }
}
