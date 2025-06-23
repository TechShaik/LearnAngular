import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05.Forms';
  user:{name:string;email:string}={
    name:'',
    email:'',
  };

  SubmitForm(form:NgForm){
    console.log(form.value,this.user);
   
  }

  validateEmail():boolean{
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.user.email);
  }
}
