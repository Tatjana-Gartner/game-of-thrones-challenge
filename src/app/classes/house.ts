import { Character } from './character';

export class House {
  private url: string;
  public name: string;
  private region: string;
  private coatOfArms: string;
  private words: string;
  private titles: string[];
  private seats: string[];
  private currentLord: string;
  private heir: string;
  private overlord: string;
  private founded: string;
  private founder: string;
  private diedOut: string;
  private ancestralWeapons: string[];
  private cadetBranches: string[];
  private swornMembers: string[];

  constructor(house: any) {
    this.url = house.url;
    this.name = house.name;
    this.region = house.region;
    this.coatOfArms = house.coatOfArms;
    this.words = house.words
    this.titles = house.titles;
    this.seats = house.seats;
    this.currentLord = house.currentLord;
    this.heir = house.heir;
    this.overlord = house.overleard;
    this.founded = house.founded
    this.founder = house.founder;
    this.diedOut = house.diedOut;
    this.ancestralWeapons = house.ancestralWeapons;
    this.cadetBranches = house.cadetBranches;
    this.swornMembers = house.swornMembers;
  }

  public getUrl(): string {
    return this.url;
  }

  public getName(): string {
    return this.name;
  }

  public getRegion(): string {
    return this.region;
  }

  public getCoatOfArms(): string {
    return this.coatOfArms;
  }

  public getWords(): string {
    return this.words;
  }

  public getTitles(): string[] {
    return this.titles;
  }

  public getSeats(): string[] {
  return this.seats;
  }

  public getCurrentLord(): string {
    return this.currentLord;
  }

  public getHeir(): string {
    return this.heir;
  }

  public getOverlord(): string {
    return this.overlord;
  }

  public getFounded(): string {
    return this.founded
  }

  public getFounder(): string {
    return this.founder;
  }

  public getDiedOut(): string {
    return this.diedOut
  }

  public getAncestralWeapons(): string[] {
    return this.ancestralWeapons;
  }

  public getCadetBranches(): string[] {
    return this.cadetBranches;
  }

  public getSwornMembers(): string[] {
    return this.swornMembers;
  }
}
