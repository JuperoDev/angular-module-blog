import { Component, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-add-post',
  templateUrl: './blog-add-post.component.html',
  styleUrls: ['./blog-add-post.component.scss']
})
export class BlogAddPostComponent implements OnDestroy {
  post = {
    title: '',
    author: '',
    category: '',
    content: '',
    date: new Date().toISOString(),
    image: ''
  };

  private readonly baseUrl = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
  private http = inject(HttpClient);
  private router = inject(Router);
  private subscription: Subscription | null = null;

  submitPost() {
    const body = {
      fields: {
        title: { stringValue: this.post.title },
        author: { stringValue: this.post.author },
        category: { stringValue: this.post.category },
        content: { stringValue: this.post.content },
        date: { timestampValue: new Date(this.post.date).toISOString() },
        image: { stringValue: this.post.image || '' }
      }
    };

    this.subscription = this.http.post(this.baseUrl, body).subscribe({
      next: (response) => {
        console.log('Post added successfully!', response);
        this.resetForm();
        this.goToHomePage();
      },
      error: (error) => {
        console.error('Error adding post:', error);
      }
    });
  }

  resetForm() {
    this.post = {
      title: '',
      author: '',
      category: '',
      content: '',
      date: new Date().toISOString(),
      image: ''
    };
  }

  goToHomePage() {
    this.router.navigate(['/']).then(() => {
      window.location.reload(); 
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); 
  }
}
