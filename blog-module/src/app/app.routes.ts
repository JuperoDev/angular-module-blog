import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogDetailComponent } from './blog-entries/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: BlogEntriesComponent },  
  { path: ':id', component: BlogDetailComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
