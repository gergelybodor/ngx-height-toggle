import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCollapsibleComponent } from './default-collapsible.component';

describe('DefaultCollapsibleComponent', () => {
  let component: DefaultCollapsibleComponent;
  let fixture: ComponentFixture<DefaultCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
