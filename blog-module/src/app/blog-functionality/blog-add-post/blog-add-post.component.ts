import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  // Import the Router service

@Component({
  selector: 'app-blog-add-post',
  templateUrl: './blog-add-post.component.html',
  styleUrls: ['./blog-add-post.component.scss']
})
export class BlogAddPostComponent {

  post = {
    title: '',
    author: '',
    category: '',
    content: '',
    date: new Date().toISOString(),
    image: ''
  };

  constructor(private http: HttpClient, private router: Router) {}  // Inject Router ver mejor

  submitPost() {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    
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

    this.http.post(url, body).subscribe({
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
    // Navigate  and force frfreh
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
