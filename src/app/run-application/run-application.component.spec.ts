import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunApplicationComponent } from './run-application.component';

describe('RunApplicationComponent', () => {
  let component: RunApplicationComponent;
  let fixture: ComponentFixture<RunApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
