import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/article.model';
import { FirestoreDocument } from '../../models/firestore.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  articleId: string = '';
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id')!;
    this.fetchArticleDetails(this.articleId);
  }

  fetchArticleDetails(id: string): void {
    const url = `https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles/${id}`;
    this.http.get<FirestoreDocument>(url).subscribe({
      next: (response) => {
        this.article = {
          author: response.fields.author.stringValue,
          category: response.fields.category.stringValue,
          content: response.fields.content.stringValue,
          date: response.fields.date.stringValue,
          image: response.fields.image.stringValue,
          title: response.fields.title.stringValue,
        };
      },
      error: (err) => {
        console.error('Error fetching article:', err);
      }
    });
  }

  // Go back to the main page
  goBack(): void {
    this.router.navigate(['']);  // Navigate to the root path
  }
}
