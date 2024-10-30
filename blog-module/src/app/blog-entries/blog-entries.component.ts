import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.scss']
})
export class BlogEntriesComponent implements OnInit, OnDestroy {
  articles: any[] = [];
  private subscription: Subscription | null = null;

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.subscription = this.http.get<{ documents: any[] }>(url).subscribe({
      next: (response) => {
        this.articles = response.documents;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); 
  }
}
