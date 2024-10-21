import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  submitPost() {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    
    const body = {
      fields: {
        title: { stringValue: this.post.title },
        author: { stringValue: this.post.author },
        category: { stringValue: this.post.category },
        content: { stringValue: this.post.content },
        date: { timestampValue: new Date(this.post.date).toISOString() },  // Converting to ISO format
        image: { stringValue: this.post.image || '' }  // Optional image field
      }
    };

    this.http.post(url, body).subscribe({
      next: (response) => {
        console.log('Post added successfully!', response);
        this.resetForm();
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
}
