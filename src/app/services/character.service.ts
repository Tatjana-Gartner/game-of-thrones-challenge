import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  /**
   * Service to get all characters of a given page.
   * @param page pagenumber
   * @returns characters of the page
   */
  getCharacters(page: number): Observable<any> {
    return this.http.get(`https://www.anapioficeandfire.com/api/characters?page=${page}`);
  }

  /**
   * Get character by specific url.
   * @param character url
   * @returns character
   */
  getCharacter(url: string): Observable<any> {
    return this.http.get(`${url}`);
  }

  /**
   * Get a specific character by name (full name).
   * @param term name of the character
   * @returns character
   */
  getCharacterByName(term: any) {
    return this.http.get(`https://www.anapioficeandfire.com/api/characters?name=${term}`)
  }
}
