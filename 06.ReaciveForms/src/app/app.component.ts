import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("/^[^\s@]+@[^\s@]+\.[^\s@]+$/")]],
    adress: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
})
  })
}

  submitForm(){
    if (this.userForm.valid) {
      console.log("Form Submitted!", this.userForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
