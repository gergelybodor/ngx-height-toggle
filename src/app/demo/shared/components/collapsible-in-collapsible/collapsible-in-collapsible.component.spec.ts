import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleInCollapsibleComponent } from './collapsible-in-collapsible.component';

describe('CollapsibleInCollapsibleComponent', () => {
  let component: CollapsibleInCollapsibleComponent;
  let fixture: ComponentFixture<CollapsibleInCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleInCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleInCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
