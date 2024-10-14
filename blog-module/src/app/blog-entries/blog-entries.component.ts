import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.scss']
})
export class BlogEntriesComponent implements OnInit {
  articles: any[] = []; 
   // Variable to store the fetched articles

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchArticles();  
    // Fetch articles on component initialization
  }

  fetchArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.http.get<{ documents: any[] }>(url).subscribe({
      next: (response) => {
        this.articles = response.documents;  
      },
      error: (err) => {
        console.error('Error fetching articles:', err);
      }
    });
  }
}
