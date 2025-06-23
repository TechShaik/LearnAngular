import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
 @Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
Books: any[] = [];

constructor(private bookService: BookService) { }

getBooks(): any[] {
  this.bookService.getAllBooks().subscribe(data => {
    this.Books = data;
  });
  return this.Books;
}

}
