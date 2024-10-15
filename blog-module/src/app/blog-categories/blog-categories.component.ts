import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {
  articles: any[] = [];  
  groupedCategories: { [category: string]: number } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  // Fetch articles from Firebase
  fetchArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.http.get<{ documents: any[] }>(url).subscribe({
      next: (response) => {
        this.articles = response.documents;  
        this.groupByCategory();  
      },
      error: (err) => {
        console.error('Error: ', err);
      }
    });
  }

  // Group the articles by category
  groupByCategory(): void {
    this.groupedCategories = this.articles.reduce((acc, article) => {
      const category = article.fields.category.stringValue;  
      if (!acc[category]) {
        acc[category] = 0; 
      }
      acc[category]++;  
      return acc;
    }, {});
  }
}
