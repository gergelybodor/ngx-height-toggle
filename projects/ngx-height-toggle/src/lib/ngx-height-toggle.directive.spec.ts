import { NgxHeightToggleDirective } from './ngx-height-toggle.directive';
import { Component, DebugElement, OnInit } from '@angular/core';
import { NgxHeightToggleService } from './ngx-height-toggle.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'ngx-height-toggle-test',
  template: `
    <div class="debug-element" ngxHeightToggle [open]="open" [closedHeight]="closedHeight">
      <p *ngIf="showChildInDOM">{{paragraph}}</p>
      <div *ngIf="showChildInDOM"></div>
    </div>`,
  styles: [`
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
  `]
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

  constructor(private heightToggleService: NgxHeightToggleService) { }

  ngOnInit(): void {
    this.paragraph = this.ipsums[0];
  }

  public toggle(): void {
    this.open = !this.open;
  }

  public updateContent(): void {
    this.paragraph = this.getDifferentIpsum(this.paragraph);
    this.heightToggleService.contentChange();
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
      declarations: [HeightToggleTestComponent, NgxHeightToggleDirective],
      providers: [NgxHeightToggleService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightToggleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.directive(NgxHeightToggleDirective));
    element = <HTMLElement> debugElement.nativeElement;
    directive = debugElement.injector.get<NgxHeightToggleDirective>(NgxHeightToggleDirective);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a directive instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('when component loads and false is passed to input open, element', () => {

    it('should be of height 0px', () => {
      component.ngOnInit();
      component.open = false;
      fixture.detectChanges();
      expect(element.style.height).toBe(directive.closedHeightInPixels);
    });
  });

  describe('when the open input is toggled, element', () => {

    it('should expand if input is true', () => {
      component.ngOnInit();
      component.open = false;
      fixture.detectChanges();
      expect(element.style.height).toBe(directive.closedHeightInPixels);
      component.toggle();
      fixture.detectChanges();
      expect(element.style.height).toBe(component.elementHeights[0]);
    });

    it('should collapse if input is false', () => {
      component.ngOnInit();
      component.open = true;
      fixture.detectChanges();
      expect(element.style.height).toBe(component.elementHeights[0]);
      component.toggle();
      fixture.detectChanges();
      expect(element.style.height).toBe(directive.closedHeightInPixels);
    });

    it('should collapse if input is false, and if closedHeight input is set, height should be set according to its value', () => {
      const mockClosedHeight = 10;
      component.ngOnInit();
      component.open = true;
      component.closedHeight = mockClosedHeight;
      fixture.detectChanges();
      expect(element.style.height).toBe(component.elementHeights[0]);
      component.toggle();
      fixture.detectChanges();
      expect(element.style.height).toBe(mockClosedHeight + 'px');
    });
  });

  describe('when the open input is true and content changes, element', () => {

    it('should have adjusted height', () => {
      const listen = spyOn<any>(directive, 'listenForContentChanges').and.callThrough();
      component.ngOnInit();
      component.open = true;
      fixture.detectChanges();
      directive.ngOnInit();
      expect(listen).toHaveBeenCalled();
      expect(element.style.height).toBe(component.elementHeights[0]);
      component.updateContent();
      expect(element.style.height).toBe(component.elementHeights[1]);
      component.updateContent();
      expect(element.style.height).toBe(component.elementHeights[0]);
      component.updateContent();
      expect(element.style.height).toBe(component.elementHeights[1]);
    });

    it('should have height computed without children margin sizes, and write warning to console if if couldn\'t compute margins', () => {
      const getComputedStyle = spyOn(window, 'getComputedStyle').and.callFake(() => {
        throw new Error('error');
      });
      const warning = spyOn(console, 'warn').and.callFake(() => {
        return null;
      });
      component.ngOnInit();
      component.open = true;
      fixture.detectChanges();
      expect(element.style.height).toBe(component.elementHeights[0]);
      component.updateContent();
      expect(getComputedStyle).toHaveBeenCalled();
      expect(warning).toHaveBeenCalled();
      expect(element.style.height).toBe(component.elementHeightsWithoutMargins[1]);
      component.updateContent();
      expect(element.style.height).toBe(component.elementHeightsWithoutMargins[0]);
    });

    it('should have height unchanged if input open is false', () => {
      component.ngOnInit();
      component.open = true;
      fixture.detectChanges();
      expect(element.style.height).toBe(component.elementHeights[0]);
      directive.open = false;
      component.updateContent();
      expect(element.style.height).toBe(component.elementHeights[0]);
    });

    it('should have height 0px if element doesn\'t have children elements', () => {
      component.ngOnInit();
      component.open = true;
      fixture.detectChanges();
      expect(element.style.height).toBe(component.elementHeights[0]);
      component.showChildInDOM = false;
      component.updateContent();
      expect(element.style.height).toBe(directive.closedHeightInPixels);
    });

    it('', () => {
      component.ngOnInit();
      component.open = true;
      fixture.detectChanges();
      expect(element.style.height).toBe(component.elementHeights[0]);
      directive['lastHeight'] = +component.elementHeights[0].replace('px', '');
      directive['collapseSection'](element, +component.elementHeights[0].replace('px', ''), +component.elementHeights[0].replace('px', ''));
      expect(element.style.height).toBe(component.elementHeights[0]);
    });
  });

});
