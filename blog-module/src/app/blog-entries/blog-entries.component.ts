import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FirestoreResponse, FirestoreDocument } from '../../models/article.model';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.scss']
})
export class BlogEntriesComponent implements OnInit, OnDestroy {
  articles: FirestoreDocument[] = [];  
  private subscription: Subscription | null = null;

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.subscription = this.http.get<FirestoreResponse>(url).subscribe({
      next: (response) => {
        this.articles = response.documents;  
      },
      error: (err) => {
        console.error('Error fetching articles:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
