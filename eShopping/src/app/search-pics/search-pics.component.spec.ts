import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPicsComponent } from './search-pics.component';

describe('SearchPicsComponent', () => {
  let component: SearchPicsComponent;
  let fixture: ComponentFixture<SearchPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
