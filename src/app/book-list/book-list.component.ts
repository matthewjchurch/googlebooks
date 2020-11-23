import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "../header/search/search.service"

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: any;
  searchedBooks: any;

  constructor() { }

  ngOnInit(): void {
  }

}
