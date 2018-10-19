import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultCollapsiblePageComponent } from './default-collapsible-page.component';
import { DefaultCollapsibleModule } from '../../shared/components/default-collapsible/default-collapsible.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DefaultCollapsiblePageComponent', () => {
  let component: DefaultCollapsiblePageComponent;
  let fixture: ComponentFixture<DefaultCollapsiblePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, DefaultCollapsibleModule],
      declarations: [DefaultCollapsiblePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCollapsiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DefaultCollapsiblePageComponent', () => {
    expect(component).toBeTruthy();
  });
});
