import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { UserComponent } from './component/user/user.component';
import { BookComponent } from './component/book/book.component';
 
const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'books', component: BookComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
