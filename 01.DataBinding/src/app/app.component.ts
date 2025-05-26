import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // interpolation 

  title = 'demo';
  isDisabled:boolean=true;
 textColor:string='red';
 bg:string="yellow";
 counter:number=0;

 //  property binding
image: string = "https://angular.io/assets/images/logos/angular/angular.png";
   counterIncrement(){
   this.counter++;
 }

//attribute binding

 inputText:string="initial value";


 // class binding
classes:string="danger text-size";

bgc:string="green";
}


