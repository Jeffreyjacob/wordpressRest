import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetPostPage } from './get-post.page';

describe('GetPostPage', () => {
  let component: GetPostPage;
  let fixture: ComponentFixture<GetPostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
