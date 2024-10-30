import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FirestoreResponse, FirestoreDocument, Article } from '../../../models/article.model';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  groupedCategories: { [category: string]: number } = {};
  private subscription: Subscription | null = null;

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.subscription = this.http.get<FirestoreResponse>(url).subscribe({
      next: (response) => {
        this.articles = response.documents.map(this.mapFirestoreDocumentToArticle);
        this.groupByCategory();
      },
      error: (err) => {
        console.error('Error fetching articles:', err);
      }
    });
  }

  mapFirestoreDocumentToArticle(document: FirestoreDocument): Article {
    return {
      author: document.fields.author.stringValue,
      category: document.fields.category.stringValue,
      content: document.fields.content.stringValue,
      date: document.fields.date.timestampValue,
      image: document.fields.image.stringValue,
      title: document.fields.title.stringValue,
    };
  }

  groupByCategory(): void {
    this.groupedCategories = this.articles.reduce((acc, article) => {
      const category = article.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category]++;
      return acc;
    }, {} as { [category: string]: number });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
