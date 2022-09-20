import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EproductComponent } from './eproduct.component';

describe('EproductComponent', () => {
  let component: EproductComponent;
  let fixture: ComponentFixture<EproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
