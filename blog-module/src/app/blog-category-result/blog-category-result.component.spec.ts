import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryResultComponent } from './blog-category-result.component';

describe('BlogCategoryResultComponent', () => {
  let component: BlogCategoryResultComponent;
  let fixture: ComponentFixture<BlogCategoryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogCategoryResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogCategoryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
