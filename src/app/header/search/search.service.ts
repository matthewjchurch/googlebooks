import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface GoogleBooksResponse {
    items: any[],
    kind: string,
    totalItems: number
}

@Injectable({
    providedIn: 'root'
})
    export class SearchService {

    constructor(private http: HttpClient) { }

    queryStr: string;

    private childClickedEvent = new BehaviorSubject<string>("");

    emitChildEvent(msg: string){
        this.childClickedEvent.next(msg)
    }

    childEventListner(){
        return this.childClickedEvent.asObservable();
    }

    getBooks(bookSearch) {
        return this.http.get(bookSearch)
            .toPromise()
            .then((res: GoogleBooksResponse) => res)
    }
}
