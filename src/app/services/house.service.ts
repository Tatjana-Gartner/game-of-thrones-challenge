import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor(private http: HttpClient) { }

  /**
   * Service to get all houses of a given page.
   * @param page pagenumber
   * @returns houses of the page
   */
  getHouses(page: number): Observable<any> {
    return this.http.get(`https://www.anapioficeandfire.com/api/houses?page=${page}`);
  }

  /**
   * Gets a house for specific url.
   * @param house url
   * @returns house
   */
  getHouse(url: string): Observable<any> {
    return this.http.get(`${url}`);
  }

  /**
   * Get a specific house by name (full name).
   * @param term name of the house
   * @returns house
   */
  getHouseByName(term: any) {
    return this.http.get(`https://www.anapioficeandfire.com/api/houses?name=${term}`)
  }
}
