import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: any[];

  constructor() { }

  handleDescription(description) {
    if (description && description.length > 297) {
      return `${description.slice(0, 296)}...`;
    }
    else {
      return description;
    }
  }

  ngOnInit(): void {
    console.log(this.books);
    
  }

}
