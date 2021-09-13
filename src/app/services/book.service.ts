import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) { }

  /**
   * Service to get all books of a given page.
   * @param page pagenumber
   * @returns books of the page
   */
  getBooks(page: number): Observable<any> {
    return this.http.get(`https://www.anapioficeandfire.com/api/books?page=${page}`);
  }

  /**
   * Get book for a specific url.
   * @param book url
   * @returns book
   */
  getBook(url: string): Observable<any> {
    return this.http.get(`${url}`);
  }

  /**
   * Get a specific book by name (full name).
   * @param term name of the book
   * @returns house
   */
  getBookByName(term: any) {
    return this.http.get(`https://www.anapioficeandfire.com/api/books?name=${term}`)
  }
}
