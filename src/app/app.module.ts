import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookService } from './services/book.service';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BookService],
})
export class AppModule { }
