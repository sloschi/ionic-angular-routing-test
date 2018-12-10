import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDetailPage } from './object-detail.page';

describe('ObjectDetailPage', () => {
  let component: ObjectDetailPage;
  let fixture: ComponentFixture<ObjectDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
