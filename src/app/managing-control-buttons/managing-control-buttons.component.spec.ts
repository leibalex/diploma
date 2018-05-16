import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingControlButtonsComponent } from './managing-control-buttons.component';

describe('ManagingControlButtonsComponent', () => {
  let component: ManagingControlButtonsComponent;
  let fixture: ComponentFixture<ManagingControlButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingControlButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingControlButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
