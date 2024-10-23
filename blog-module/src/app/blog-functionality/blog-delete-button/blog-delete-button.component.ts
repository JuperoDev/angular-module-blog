import { Component, Input } from '@angular/core';
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

  constructor(private http: HttpClient, private router: Router) {}

  deletePost() {
    if (this.postId) {
      const url = `${this.baseUrl}/${this.postId}`;
      this.http.delete(url).subscribe({
        next: () => {
          // Navigate to the main page after deletion
          this.router.navigate(['/']).then(() => {
            window.location.reload(); // Reload the page to reflect changes, do not forget
          });
        },
        error: (error) => {
          console.error('Error deleting post:', error);
        }
      });
    }
  }
}
