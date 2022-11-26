import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersoneComponent } from './update-persone.component';

describe('UpdatePersoneComponent', () => {
  let component: UpdatePersoneComponent;
  let fixture: ComponentFixture<UpdatePersoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePersoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
