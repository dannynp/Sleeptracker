import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlogPage } from './viewlog.page';

describe('ViewlogPage', () => {
  let component: ViewlogPage;
  let fixture: ComponentFixture<ViewlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
