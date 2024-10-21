import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogDetailComponent } from './blog-entries/blog-detail/blog-detail.component';
import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';  
import { BlogAddPostComponent } from './blog-categories/blog-add/blog-add-post/blog-add-post.component';
import { WtfComponent } from './wtf/wtf.component';

const routes: Routes = [
  { path: '', component: BlogEntriesComponent },                             // Main page with all blog entries
  { path: ':id', component: BlogDetailComponent },                          // Detailed blog post view
  { path: 'category/:category', component: BlogCategoryResultComponent },  // Category-specific page
  { path: 'addPost', component: BlogAddPostComponent },  // add post
  { path: 'wtf', component: WtfComponent },  // add post
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
