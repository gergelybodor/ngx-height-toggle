import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleInCollapsibleComponent } from './collapsible-in-collapsible.component';
import { NgxHeightToggleModule } from '../../../../libs/ngx-height-toggle/src/ngx-height-toggle.module';
import { DefaultCollapsibleModule } from '../default-collapsible/default-collapsible.module';

describe('CollapsibleInCollapsibleComponent', () => {
  let component: CollapsibleInCollapsibleComponent;
  let fixture: ComponentFixture<CollapsibleInCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxHeightToggleModule, DefaultCollapsibleModule],
      declarations: [CollapsibleInCollapsibleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleInCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CollapsibleInCollapsibleComponent', () => {
    expect(component).toBeTruthy();
  });
});
