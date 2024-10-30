import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';  
import { BlogAddPostComponent } from './blog-functionality/blog-add-post/blog-add-post.component';

const routes: Routes = [
  { path: '', component: BlogEntriesComponent },                             // Main page with all blog entries
  { path: ':id', component: BlogPostComponent },                          // Detailed blog post view
  { path: 'category/:category', component: BlogCategoryResultComponent },  // Category-specific page
<<<<<<< HEAD
  { path: 'add/post', component: BlogAddPostComponent },  // add post
=======
  { path: 'add/post', component: BlogAddPostComponent } // add post
>>>>>>> ca0d210aa5ac77e4e4e00f5a5832465a495d7771
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
