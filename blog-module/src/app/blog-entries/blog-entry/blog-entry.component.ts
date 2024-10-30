import { Component, Input, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnDestroy {
  @Input() article: any;

  private router = inject(Router);
  private subscription: Subscription | null = null; 

  viewDetails(): void {
    const articleId = this.article.name.split('/').pop(); 
    this.router.navigate([articleId]);
  }

  ngOnDestroy(): void {
   
    this.subscription?.unsubscribe();
  }
}
