import { Component, Input, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreDocument } from '../../../models/article.model';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnDestroy {
  @Input() article!: FirestoreDocument;  

  private router = inject(Router);

  viewDetails(): void {
    const articleId = this.article.name.split('/').pop();
    this.router.navigate([articleId]);  
  }

  ngOnDestroy(): void {
  
  }
}
