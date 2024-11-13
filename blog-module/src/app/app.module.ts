import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';  
import { FormsModule } from '@angular/forms'; 


// Components
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';
import { BlogEntryComponent } from './blog-entries/blog-entry/blog-entry.component';


import { BlogCategoryResultComponent } from './blog-category-result/blog-category-result.component';

//refactor components

         // blog functionality
import { BlogAddButtonComponent } from './blog-functionality/blog-add-button/blog-add-button.component';
import { BlogDeleteButtonComponent } from './blog-functionality/blog-delete-button/blog-delete-button.component';
import { BlogAddPostComponent } from './blog-functionality/blog-add-post/blog-add-post.component';

import { BlogPostComponent } from './blog-post/blog-post.component';
import { environment } from '../environments/environment';

import { BlogCategoriesComponent } from './blog-navigation/blog-category-navigator/blog-categories.component';
import { UserContentComponent } from './user-content/user-content.component';


// firebase 

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    BlogEntriesComponent,
    BlogEntryComponent,


    BlogCategoryResultComponent,
    BlogAddPostComponent,

    // refactor 
    BlogAddButtonComponent,
    BlogDeleteButtonComponent,
    BlogPostComponent,
    BlogCategoriesComponent,
    UserContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule  ,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
