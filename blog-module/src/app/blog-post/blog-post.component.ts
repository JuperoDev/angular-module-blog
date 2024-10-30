import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  articleId: string = '';
  article: Article | null = null;
  private subscription: Subscription | null = null;

  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private router = inject(Router);

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id')!;
    this.fetchArticleDetails(this.articleId);
  }

  fetchArticleDetails(id: string): void {
    const url = `https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles/${id}`;
    this.subscription = this.http.get<any>(url).subscribe({
      next: (response) => {
        this.article = {
          author: response.fields.author.stringValue,
          category: response.fields.category.stringValue,
          content: response.fields.content.stringValue,
          date: response.fields.date.timestampValue,
          image: response.fields.image.stringValue,
          title: response.fields.title.stringValue,
        };
      },
      error: (err) => {
        console.error('Error fetching article:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['']); // home
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); 
  }
}
