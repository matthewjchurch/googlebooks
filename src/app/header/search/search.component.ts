import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from "./search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }
  
  @Output() showBooks: EventEmitter<any> = new EventEmitter();

  handleChange(event) {
    this.searchService.queryStr = `https://www.googleapis.com/books/v1/volumes?q=inauthor=${event.target.value}&maxResults=15`
  }

  handleClick(e) {
    this.searchService.emitChildEvent(this.searchService.queryStr);
  }

  ngOnInit(): void {
  }

}
