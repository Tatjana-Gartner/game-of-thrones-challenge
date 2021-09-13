import { Component, OnInit } from '@angular/core';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  selectedbook?: Book;

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {}

  getBooks(): void {}

}
