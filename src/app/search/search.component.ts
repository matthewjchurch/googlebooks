import { Component, OnInit } from '@angular/core';
import { SearchService } from "./search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }
  
  books: any[];

  handleChange(event) {
    this.searchService.queryStr = `https://www.googleapis.com/books/v1/volumes?q=inauthor=${event.target.value}&maxResults=15`
  }

  handleClick() {
    this.searchService.getBooks()
      .then(res => {        
        this.books = res.items;
        console.log(this.books);
      })
  }

  ngOnInit(): void {
  }

}
