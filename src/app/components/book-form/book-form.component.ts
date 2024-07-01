import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required],
      genre: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
    }
  }
}
