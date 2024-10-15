import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogDetailComponent } from './blog-entries/blog-detail/blog-detail.component';
import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';  

const routes: Routes = [
  { path: '', component: BlogEntriesComponent },                             // Main page with all blog entries
  { path: ':id', component: BlogDetailComponent },                          // Detailed blog post view
  { path: 'category/:category', component: BlogCategoryResultComponent },  // Category-specific page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
