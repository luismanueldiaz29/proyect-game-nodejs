import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamerComponent } from './list-gamer.component';

describe('ListGamerComponent', () => {
  let component: ListGamerComponent;
  let fixture: ComponentFixture<ListGamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
