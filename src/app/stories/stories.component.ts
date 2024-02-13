import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../books.service';



@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(res => {
      this.books = res as any;
      console.log(this.books)
    })
  }

}
