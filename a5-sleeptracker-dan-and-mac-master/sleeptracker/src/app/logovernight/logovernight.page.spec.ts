import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogovernightPage } from './logovernight.page';

describe('LogovernightPage', () => {
  let component: LogovernightPage;
  let fixture: ComponentFixture<LogovernightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogovernightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogovernightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
