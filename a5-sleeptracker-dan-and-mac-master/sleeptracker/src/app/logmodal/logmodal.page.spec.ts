import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmodalPage } from './logmodal.page';

describe('LogmodalPage', () => {
  let component: LogmodalPage;
  let fixture: ComponentFixture<LogmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
