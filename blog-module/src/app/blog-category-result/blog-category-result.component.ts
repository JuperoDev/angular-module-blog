import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-category-result',
  templateUrl: './blog-category-result.component.html',
  styleUrls: ['./blog-category-result.component.scss']
})
export class BlogCategoryResultComponent implements OnInit, OnDestroy {
  category: string = '';
  articles: any[] = [];
  private routeSub: Subscription | null = null;
  private httpSub: Subscription | null = null;

  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  ngOnInit(): void {
    // Suscribirse a cambios en la ruta
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.fetchArticlesByCategory(this.category);
    });
  }

  fetchArticlesByCategory(category: string): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.httpSub = this.http.get<{ documents: any[] }>(url).subscribe({
      next: (response) => {
        this.articles = response.documents.filter(article => 
          article.fields.category.stringValue === category
        );
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe(); 
    this.httpSub?.unsubscribe();  
  }
}
