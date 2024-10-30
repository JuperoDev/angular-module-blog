import { Component, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-delete-button',
  templateUrl: './blog-delete-button.component.html',
  styleUrls: ['./blog-delete-button.component.scss']
})
export class BlogDeleteButtonComponent {
  @Input() postId: string | undefined;

  private readonly baseUrl = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
  private http = inject(HttpClient);
  private router = inject(Router);

  deletePost() {
    if (this.postId) {
      const url = `${this.baseUrl}/${this.postId}`;
      this.http.delete(url).subscribe({
        next: () => {
          // go home
          this.router.navigate(['/']).then(() => {
            window.location.reload(); // Recargar 
          });
        },
        error: (error) => {
          console.error('Error deleting post:', error);
        }
      });
    }
  }
}
