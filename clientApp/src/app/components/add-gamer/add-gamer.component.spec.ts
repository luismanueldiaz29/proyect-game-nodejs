import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamerComponent } from './add-gamer.component';

describe('AddGamerComponent', () => {
  let component: AddGamerComponent;
  let fixture: ComponentFixture<AddGamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
