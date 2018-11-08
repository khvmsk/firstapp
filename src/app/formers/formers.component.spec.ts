import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormersComponent } from './formers.component';

describe('FormersComponent', () => {
  let component: FormersComponent;
  let fixture: ComponentFixture<FormersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
