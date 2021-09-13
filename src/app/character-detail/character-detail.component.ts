import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { House } from '../classes/house';
import { Character } from '../classes/character';
import { Book } from '../classes/book';
import { BookService } from '../services/book.service';
import { CharacterService } from '../services/character.service';
import { HouseService } from '../services/house.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() character: Character | undefined;
  public showLoader: boolean = false;
  public father!: Character;
  public fatherName!: string;
  public mother!: Character;
  public motherName!: string;
  public spouse!: Character;
  public spouseName!: string;
  public books: Book[] = [];
  public povbooks: Book[] = [];

  constructor(
    public modal: NgbActiveModal,
    public route: ActivatedRoute,
    public houseService: HouseService,
    public bookService: BookService,
    public characterService: CharacterService,
  ) { }

  ngOnInit() {
    this.getFather();
    this.getMother();
    this.getSpouse();
    this.getBooks();
    this.getPovBooks();
  }

  /**
   * Gets the characters name of the houses current lord.
   */
  private getFather() {
    if (this.character && this.character.getFather()) {
      this.showLoader = true;
      this.characterService.getCharacter(this.character.getFather()).subscribe(character => {
        this.father = new Character(character);
        this.fatherName = this.father.getName();
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
  private getMother() {
    if (this.character && this.character.getMother()) {
      this.showLoader = true;
      this.characterService.getCharacter(this.character.getMother()).subscribe(character => {
        this.character = new Character(character);
        this.motherName = this.mother.getName();
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
  private getSpouse() {
    if (this.character && this.character.getSpouse()) {
      this.showLoader = true;
      this.characterService.getCharacter(this.character.getSpouse()).subscribe(character => {
        this.spouse = new Character(character);
        this.spouseName = this.spouse.getName();
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
  private getBooks() {
    if (this.character && this.character.getBooks().length !== 0) {
      this.showLoader = true;
      this.character.getBooks().forEach(url => {
        this.bookService.getBook(url.getUrl()).subscribe(book => {
          this.books.push(new Book(book));
        }, error => {
          console.error(error);
          this.showLoader = false;
        });
      });
      this.showLoader = false;
    }
  }

    /**
   * Gets the houses names of cadet branches.
   */
     private getPovBooks() {
      if (this.character && this.character.getPovbooks().length !== 0) {
        this.showLoader = true;
        this.character.getPovbooks().forEach(url => {
          this.bookService.getBook(url.getUrl()).subscribe(book => {
            this.books.push(new Book(book));
          }, error => {
            console.error(error);
            this.showLoader = false;
          });
        });
        this.showLoader = false;
      }
    }
}

