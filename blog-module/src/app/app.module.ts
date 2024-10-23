import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';  
import { FormsModule } from '@angular/forms'; 


// Components
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogEntryComponent } from './blog-entries/blog-entry/blog-entry.component';

import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';
import { CosaComponent } from './cosa/cosa.component';

//refactor components

         // blog functionality
import { BlogAddButtonComponent } from './blog-functionality/blog-add-button/blog-add-button.component';
import { BlogDeleteButtonComponent } from './blog-functionality/blog-delete-button/blog-delete-button.component';
import { BlogAddPostComponent } from './blog-functionality/blog-add-post/blog-add-post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogEntriesComponent,
    BlogEntryComponent,

    BlogCategoriesComponent,
    BlogCategoryResultComponent,
    BlogAddPostComponent,
    CosaComponent,

    // refactor 
    BlogAddButtonComponent,
    BlogDeleteButtonComponent,
    BlogPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule  ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
