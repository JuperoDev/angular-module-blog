import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  articleId: string = '';
  article: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id')!;
    this.fetchArticleDetails(this.articleId);
  }

  fetchArticleDetails(id: string): void {
    const url = `https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles/${id}`;
    this.http.get<any>(url).subscribe({
      next: (response) => {
        this.article = response;
      },
      error: (err) => {
        console.error('Error fetching article:', err);
      }
    });
  }

  // Go home
  goBack(): void {
    this.router.navigate(['']);  // Navigate to root path
  }
}
