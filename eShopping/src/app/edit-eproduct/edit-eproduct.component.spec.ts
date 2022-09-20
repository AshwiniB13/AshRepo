import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEproductComponent } from './edit-eproduct.component';

describe('EditEproductComponent', () => {
  let component: EditEproductComponent;
  let fixture: ComponentFixture<EditEproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
