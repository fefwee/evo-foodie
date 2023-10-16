import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemDetailComponent } from './recipe-item-detail.component';

describe('RecipeItemDetailComponent', () => {
  let component: RecipeItemDetailComponent;
  let fixture: ComponentFixture<RecipeItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
