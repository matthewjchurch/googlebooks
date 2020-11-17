import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    getBooks() {
        return this.http.get(this.queryStr)
            .toPromise()
            .then((res: GoogleBooksResponse) => res)
    }
}
