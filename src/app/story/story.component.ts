import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  currentAudioUrl!: string;
  book!: Book;
  bookInfo: any;
  constructor(private bookService: BooksService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const bookIndex = this.router.snapshot.params['bookIndex'];

    this.bookService.getBook(bookIndex).subscribe(res => {
      this.book = res as any;
    })
    console.log(this.book);
  }

  get fullUrl() {
    const key = this.router.snapshot.params['bookKey'];
    return `${environment.STORAGE_URL}/audio-book-fe653.appspot.com/o/stories%2F${key}%2F${this.currentAudioUrl}?alt=media`
  }
  setSong(audio: string) {     
    this.currentAudioUrl = audio;
    const bookIndex = this.router.snapshot.params['bookIndex'];
    this.bookService.getBook(bookIndex).subscribe(res => console.log(res));
    console.log(this.bookInfo, this.currentAudioUrl);
  }
}
