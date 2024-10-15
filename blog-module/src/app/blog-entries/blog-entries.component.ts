import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.scss']
})
export class BlogEntriesComponent implements OnInit {
  articles: any[] = []; 


  constructor(private http: HttpClient) {}

  //OnMount Repasar ciclo de vida del componente
  ngOnInit(): void {
    this.fetchArticles();  
  }

  fetchArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.http.get<{ documents: any[] }>(url).subscribe({
      next: (response) => {
        this.articles = response.documents;  
      },
      error: (err) => {
        console.error('Error: ', err);
      }
    });
  }
}
