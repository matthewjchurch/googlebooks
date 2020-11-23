import { Component } from '@angular/core';
import { SearchService } from "./header/search/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private searchService: SearchService) {
    
  }
  title = 'book-finder';
  books: any;
  search: any;
  isSearchClicked: boolean = false;
  
  ngOnInit() {
    this.searchService.childEventListner().subscribe(async info => {
      this.isSearchClicked = true;
      this.search = await this.searchService.getBooks(info);
      this.books = this.search.items;
    })
  }
}
