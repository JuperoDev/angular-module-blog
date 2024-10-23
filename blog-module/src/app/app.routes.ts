import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogDetailComponent } from './blog-post/blog-detail.component';
import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';  
import { BlogAddPostComponent } from './blog-functionality/blog-add-post/blog-add-post.component';
import { CosaComponent } from './cosa/cosa.component';

const routes: Routes = [
  { path: '', component: BlogEntriesComponent },                             // Main page with all blog entries
  { path: ':id', component: BlogDetailComponent },                          // Detailed blog post view
  { path: 'category/:category', component: BlogCategoryResultComponent },  // Category-specific page
  { path: 'add/post', component: BlogAddPostComponent },  // add post
  { path: 'posting/cosa', component: CosaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
