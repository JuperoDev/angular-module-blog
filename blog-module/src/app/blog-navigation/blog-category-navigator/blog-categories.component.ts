import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../../models/article.model';
import { FirestoreDocument } from '../../../models/firestore.model';
import { FirestoreResponse } from '../../../models/firestore.model';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {
  articles: Article[] = [];
  groupedCategories: { [category: string]: number } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAndGroupArticles();
  }

  // Fetch and group articles by category
  fetchAndGroupArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.http.get<FirestoreResponse>(url).subscribe({
      next: (response) => {
        this.articles = response.documents.map((doc: FirestoreDocument) => ({
          author: doc.fields.author.stringValue,
          category: doc.fields.category.stringValue,
          content: doc.fields.content.stringValue,
          date: doc.fields.date.stringValue,
          image: doc.fields.image.stringValue,
          title: doc.fields.title.stringValue,
        }));
        
        this.groupedCategories = this.articles.reduce((acc, article) => {
          const category = article.category;
          acc[category] = (acc[category] || 0) + 1;
          return acc;
        }, {} as { [category: string]: number });
      },
      error: (err) => {
        console.error('Error fetching articles:', err);
      }
    });
  }
}
