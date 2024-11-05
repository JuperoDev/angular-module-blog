import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';
import { BlogAddPostComponent } from './blog-functionality/blog-add-post/blog-add-post.component';

const routes: Routes = [
  { path: '', component: BlogEntriesComponent },                             
  { path: 'category/:category', component: BlogCategoryResultComponent },   
  { path: 'add/post', component: BlogAddPostComponent },                     
  { path: ':id', component: BlogPostComponent }                              
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
