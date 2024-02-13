import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Book {
  title: string;
  author: string;
  category: string[];
  files: string[];
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }


  getBooks() {
    return this.http.get(environment.FIREBASE_URL + '/books.json');
  }

  getBook(bookIndex: number) {
    return this.http.get(environment.FIREBASE_URL + `/books/${bookIndex}.json`);
  }
}
