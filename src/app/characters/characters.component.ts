import { Component, OnInit } from '@angular/core';
import { Character } from '../classes/character';
import { CharacterService } from '../services/character.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterDetailsComponent } from '../character-detail/character-detail.component';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [DecimalPipe],
})
export class CharactersComponent implements OnInit {

  // public characters: Character[] = [];
  public showLoader: boolean = false;
  // public page: number = 1;
  // public totalNoOfPages = [...Array(46).keys()].slice(1);
  // public filter = new FormControl('');
  // public searchString!: string;
  // public filteredCharacters: Observable<Character[]> | undefined;

  // constructor(
  //   private characterService: CharacterService,
  //   private router: Router,
  //   private modalService: NgbModal,
  //   ) { }

  async ngOnInit() {
    // await this.getAllCharacters();
    // this.filteredCharacters = this.filter.valueChanges.pipe(
    //   startWith(''),
    //   map(text => this.search(text))
    // );
  }

//   public search(text: string): Character[] {
//     console.log(text);
//     if (text.length < 1) {
//       return this.characters;
//     } else {
//       const term = text.toLowerCase();
//       return this.characters.filter(character => {
//         const name = character.getName().toLowerCase();

//         return name.includes(term)

//     });
//     }
// }
  
//   public async getAllCharacters() {
//     this.showLoader = true;
//     for await (let page of this.totalNoOfPages) {
//       await this.characterService.getCharacters(page).subscribe(async characters => {
//         for await (let character of characters) {
//           this.characters.push(new Character(character));
//         }
//       });
//     }
//     await this.characters.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
//     this.showLoader = false;
//   }

//   public openModal(character: Character): Promise<void> {
//     const modal = this.modalService.open(CharacterDetailsComponent);
//     modal.componentInstance.character = character;
//     return modal.result.then(async (result) => {
//     }).catch(error => {
//       this.router.navigateByUrl('/characters');
//     });
//     }
}

