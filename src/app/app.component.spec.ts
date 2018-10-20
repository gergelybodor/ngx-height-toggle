import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { DemoModule } from './demo/demo.module';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, DemoModule],
      declarations: [AppComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ngx-height-toggle'`, inject([Title], (title: Title) => {
    component.ngOnInit();
    expect(title.getTitle()).toEqual(component.appTitle);
  }));
});
