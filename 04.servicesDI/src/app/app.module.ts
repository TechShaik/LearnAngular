import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MessageService } from './service/message.service';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
