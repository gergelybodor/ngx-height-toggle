import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultCollapsibleComponent } from './default-collapsible.component';
import { NgxHeightToggleModule } from '../../../../libs/ngx-height-toggle/src/ngx-height-toggle.module';

describe('DefaultCollapsibleComponent', () => {
  let component: DefaultCollapsibleComponent;
  let fixture: ComponentFixture<DefaultCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxHeightToggleModule],
      declarations: [DefaultCollapsibleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DefaultCollapsibleComponent', () => {
    expect(component).toBeTruthy();
  });
});
