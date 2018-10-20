import { NgxHeightToggleDirective } from './ngx-height-toggle.directive';
import { Component, DebugElement, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'ngx-height-toggle-test',
  template: `
    <div class="debug-element" ngxHeightToggle [open]="open" [closedHeight]="closedHeight">
      <p *ngIf="showChildInDOM">{{paragraph}}</p>
      <div *ngIf="showChildInDOM"></div>
    </div>`,
  styles: [
    `
      .debug-element {
        width: 762px;
        overflow: hidden;
        transition: height 0s ease-out;
      }

      .debug-element p {
        margin: 10px;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
      }
    `
  ]
})
export class HeightToggleTestComponent implements OnInit {
  public open = false;
  public closedHeight = 0;
  public paragraph: string;
  public showChildInDOM = true;
  public elementHeights: Array<string> = ['164px', '68px'];
  public elementHeightsWithoutMargins: Array<string> = ['144px', '48px'];
  private ipsums: Array<string> = [
    'Chupa chups donut pudding powder fruitcake. Donut danish marzipan bear claw topping. Halvah brownie donut tootsie ' +
      'roll liquorice sesame snaps caramels jelly beans sweet roll. Dragée jelly-o candy marshmallow. Cotton candy ' +
      'carrot cake cake cake marshmallow tart. Bonbon jelly jelly beans lemon drops jelly-o. Pastry bonbon ice cream ' +
      'wafer topping muffin oat cake. Cheesecake cookie marzipan gummies gummi bears cupcake. Chocolate danish powder ' +
      'pudding lemon drops fruitcake macaroon. Cake chupa chups tart lollipop halvah brownie chupa chups cheesecake.',

    'Liquorice icing apple pie bonbon jujubes croissant bonbon. Topping jelly-o ice cream jelly-o chocolate cake. ' +
      'Pastry cake danish cake. Candy wafer cake danish sesame snaps marshmallow bear claw.'
  ];

  constructor() {}

  ngOnInit(): void {
    this.paragraph = this.ipsums[0];
  }

  public toggle(): void {
    this.open = !this.open;
  }

  public updateContent(): void {
    this.paragraph = this.getDifferentIpsum(this.paragraph);
  }

  private getDifferentIpsum(ipsum: string): string {
    return ipsum === this.ipsums[0] ? this.ipsums[1] : this.ipsums[0];
  }
}

describe('NgxHeightToggleDirective', () => {
  let component: HeightToggleTestComponent;
  let fixture: ComponentFixture<HeightToggleTestComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let directive: NgxHeightToggleDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeightToggleTestComponent, NgxHeightToggleDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightToggleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.directive(NgxHeightToggleDirective));
    element = <HTMLElement>debugElement.nativeElement;
    directive = debugElement.injector.get<NgxHeightToggleDirective>(NgxHeightToggleDirective);
  });

  it('should create test component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a directive instance', () => {
    expect(directive).toBeTruthy();
  });
});
