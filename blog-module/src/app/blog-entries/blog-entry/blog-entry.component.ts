import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent {
  @Input() article!: Article;

  constructor(private router: Router) {}

  // Extract and navigate to article ID
  viewDetails(): void {
    const articleId = this.extractArticleId(this.article);
    if (articleId) {
      this.router.navigate([articleId]);
    }
  }

  private extractArticleId(article: Article): string | undefined {
    // Extract the ID from the article name if it follows the "projects/.../documents/articles/{id}" format
    return article.name?.split('/').pop();
  }
}
