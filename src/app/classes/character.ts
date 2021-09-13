import { Book } from './book';
import { House } from './house'

export class Character {
	private url: string;
	public name: string;
	private gender: string;
	private culture: string;
  private born: string;
	private died: string;
	private titles: string[];
	private aliases: string[];
	private father: string;
	private mother: string;
	private spouse: string;
	private allegiances: House[];
	private books: Book[];
	private povBooks: Book[];
	private tvSeries: string[];
	private playedBy: string[];

    constructor(character: any) {
        this.url = character.url;
        this.name = character.name;
        this.gender = character.region;
        this.culture = character.coatOfArms;
        this.born = character.words
        this.died = character.titles;
        this.titles = character.seats;
        this.aliases = character.currentLord;
        this.father = character.heir;
        this.mother= character.overleard;
        this.spouse = character.founded
        this.allegiances = character.founder;
        this.books = character.diedOut;
        this.povBooks = character.ancestralWeapons;
        this.tvSeries = character.cadetBranches;
        this.playedBy = character.swornMembers;
      }
    
      public getUrl(): string {
        return this.url;
      }

      public getName(): string {
        return this.name;
      }
    
      public getGender(): string {
        return this.gender;
      }
    
      public getCulture(): string {
        return this.culture;
      }

      public getBorn(): string {
        return this.born;
      }
    
      public getDied(): string {
        return this.died;
      }

      public getTitels(): string[] {
        return this.titles;
      }

      public getAliases(): string[] {
        return this.aliases;
      }
    
      public getFather(): string {
        return this.father;
      }
    
      public getMother(): string {
        return this.mother;
      }

      public getSpouse(): string {
        return this.spouse;
      }
    
      public getAllegiances(): House[] {
        return this.allegiances;
      }
    
      public getBooks(): Book[] {
        return this.books;
      }

      public getPovbooks(): Book[] {
        return this.povBooks;
      }
    
      public getTvseries(): string[] {
        return this.tvSeries;
      }
    
      public getPlayedby(): string[] {
        return this.playedBy;
      }
}