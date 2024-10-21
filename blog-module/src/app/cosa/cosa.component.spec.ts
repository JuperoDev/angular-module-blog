import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosaComponent } from './cosa.component';

describe('CosaComponent', () => {
  let component: CosaComponent;
  let fixture: ComponentFixture<CosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
