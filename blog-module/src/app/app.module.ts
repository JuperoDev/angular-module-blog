import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';  
import { FormsModule } from '@angular/forms'; 


// Components
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogEntryComponent } from './blog-entries/blog-entry/blog-entry.component';
import { BlogDetailComponent } from './blog-entries/blog-detail/blog-detail.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';
import { BlogAddComponent } from './blog-categories/blog-add/blog-add.component';
import { BlogAddPostComponent } from './blog-categories/blog-add/blog-add-post/blog-add-post.component';
import { CosaComponent } from './cosa/cosa.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogEntriesComponent,
    BlogEntryComponent,
    BlogDetailComponent,
    BlogCategoriesComponent,
    BlogCategoryResultComponent,
    BlogAddComponent,
    BlogAddPostComponent,
    CosaComponent
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
