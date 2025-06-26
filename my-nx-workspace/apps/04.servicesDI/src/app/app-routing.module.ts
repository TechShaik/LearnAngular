import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatedComponent } from './components/paginated/paginated.component'; // adjust path if needed
import { HomeComponent } from './components/home/home.component';
import { ToastComponent } from './components/toast/toast.component'; 
 const routes: Routes = [
  { path: '',component:HomeComponent },
  { path: 'home', component: HomeComponent }, // just as example
  { path: 'paginated', component: PaginatedComponent },
  { path: 'messages', component: ToastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
