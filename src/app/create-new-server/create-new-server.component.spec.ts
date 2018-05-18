import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewServerComponent } from './create-new-server.component';

describe('CreateNewServerComponent', () => {
  let component: CreateNewServerComponent;
  let fixture: ComponentFixture<CreateNewServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
