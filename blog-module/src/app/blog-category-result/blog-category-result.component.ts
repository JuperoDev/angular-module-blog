import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/article.model';
import { FirestoreResponse, FirestoreDocument } from '../../models/firestore.model';

@Component({
  selector: 'app-blog-category-result',
  templateUrl: './blog-category-result.component.html',
  styleUrls: ['./blog-category-result.component.scss']
})
export class BlogCategoryResultComponent implements OnInit {
  category: string = '';
  articles: Article[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.fetchArticlesByCategory(this.category);
    });
  }

  fetchArticlesByCategory(category: string): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.http.get<FirestoreResponse>(url).subscribe({
      next: (response) => {
        this.articles = response.documents
          .filter((doc: FirestoreDocument) => doc.fields.category.stringValue === category)
          .map((doc: FirestoreDocument) => ({
            author: doc.fields.author.stringValue,
            category: doc.fields.category.stringValue,
            content: doc.fields.content.stringValue,
            date: doc.fields.date.stringValue,
            image: doc.fields.image.stringValue,
            title: doc.fields.title.stringValue,
          }));
      },
      error: (err) => {
        console.error('Error: ', err);
      }
    });
  }
}
