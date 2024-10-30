import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent {
  @Input() article: any;  

  constructor(private router: Router) {}

  // Navigate to ID
  viewDetails(): void {
    const articleId = this.article.name.split('/').pop();  // get ID
    this.router.navigate([articleId]);  
  }
}