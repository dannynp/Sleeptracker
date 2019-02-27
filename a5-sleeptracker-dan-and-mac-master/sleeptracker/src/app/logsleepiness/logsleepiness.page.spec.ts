import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsleepinessPage } from './logsleepiness.page';

describe('LogsleepinessPage', () => {
  let component: LogsleepinessPage;
  let fixture: ComponentFixture<LogsleepinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsleepinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
