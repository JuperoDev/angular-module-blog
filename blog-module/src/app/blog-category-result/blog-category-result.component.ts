import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-category-result',
  templateUrl: './blog-category-result.component.html',
  styleUrls: ['./blog-category-result.component.scss']
})
export class BlogCategoryResultComponent implements OnInit {
  category: string = '';  
  articles: any[] = [];   

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Subscribe to route changes
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;  
      this.fetchArticlesByCategory(this.category); 
    });
  }

  
  fetchArticlesByCategory(category: string): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.http.get<{ documents: any[] }>(url).subscribe({
      next: (response) => {
        this.articles = response.documents.filter(article => 
          article.fields.category.stringValue === category
        );  
      },
      error: (err) => {
        console.error('Error: ', err);
      }
    });
  }
}
