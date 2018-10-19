import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleInCollapsiblePageComponent } from './collapsible-in-collapsible-page.component';
import { CollapsibleInCollapsibleModule } from '../shared/components/collapsible-in-collapsible/collapsible-in-collapsible.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CollapsibleInCollapsiblePageComponent', () => {
  let component: CollapsibleInCollapsiblePageComponent;
  let fixture: ComponentFixture<CollapsibleInCollapsiblePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CollapsibleInCollapsibleModule],
      declarations: [CollapsibleInCollapsiblePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleInCollapsiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CollapsibleInCollapsiblePageComponent', () => {
    expect(component).toBeTruthy();
  });
});
