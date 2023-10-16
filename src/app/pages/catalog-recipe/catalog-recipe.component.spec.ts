import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogRecipeComponent } from './catalog-recipe.component';

describe('CatalogRecipeComponent', () => {
  let component: CatalogRecipeComponent;
  let fixture: ComponentFixture<CatalogRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
