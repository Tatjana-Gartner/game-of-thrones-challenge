import { Character } from './character';

export class Book {
	private url: string;
	private name: string;
	private isbn: string;
	private authors: string[];
	private numberOfPages: number;
	private publisher: string;
	private country: string;
	private mediaType: string;
	private released: string;
	private characters: Character[];

    constructor(book: any) {
        this.url = book.url;
        this.name = book.name;
        this.isbn = book.isbn
        this.authors = book.region;
        this.numberOfPages = book.coatOfArms;
        this.publisher = book.words
        this.country = book.titles;
        this.mediaType = book.seats;
        this.released = book.currentLord;
        this.characters = book.heir;
      }
    
      public getUrl(): string {
        return this.url;
      }

      public getName(): string {
        return this.name;
      }

      public getIsbn(): string {
        return this.isbn;
      }
      
      public getAuthors(): string[] {
        return this.authors;
      }

      public getNumberOfPages(): number {
        return this.numberOfPages;
      }

      public getPublisher(): string {
        return this.publisher;
      }

      public getCountry(): string {
        return this.country;
      }

      public getMediaType(): string {
        return this.mediaType;
      }

      public getReleased(): string {
        return this.released;
      }

      public getCharacters(): Character[] {
        return this.characters;
      }
}