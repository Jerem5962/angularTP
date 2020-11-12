import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOrderComponent } from './article-order.component';

describe('ArticleOrderComponent', () => {
  let component: ArticleOrderComponent;
  let fixture: ComponentFixture<ArticleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
