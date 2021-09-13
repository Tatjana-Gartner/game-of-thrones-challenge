import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../classes/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  @Input() book: Book | undefined;

  constructor() { }

  ngOnInit() {
  }

}
