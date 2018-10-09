import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
  OnInit,
  ChangeDetectorRef,
  AfterViewChecked
} from '@angular/core';
import { timer } from 'rxjs';

@Directive({
  selector: '[ngxHeightToggle]'
})
export class NgxHeightToggleDirective implements OnInit, OnChanges, AfterViewChecked {
  @Input()
  open: boolean;
  @Input()
  closedHeight = 0;
  @Input()
  transitionDuration = 500;
  @Input()
  transitionProperty = 'height';
  @Input()
  transitionTimingFunction = 'linear';
  @Input()
  transitionDelay = 0;
  @Input()
  enableChangeDetection = true;

  private lastHeight: number | null = null;
  private inProgress = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private chRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.lastHeight = this.closedHeight;
    this.setInitialStyle();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open'] && !changes['open'].firstChange && changes['open'].previousValue !== changes['open'].currentValue) {
      if (changes['open'].currentValue) {
        this.expand();
      } else {
        this.collapse();
      }
    }
  }

  ngAfterViewChecked() {
    if (this.enableChangeDetection && !this.inProgress && this.open) {
      const contentHeight = this.getContentHeight(this.elRef.nativeElement);
      if (this.lastHeight > contentHeight) {
        this.collapse(contentHeight);
      } else if (this.lastHeight < contentHeight) {
        this.expand(contentHeight);
      }
    }
  }

  collapse(toHeight?: number) {
    this.inProgress = true;
    this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.lastHeight}px`);
    this.chRef.detectChanges();
    timer(1).subscribe(() => {
      this.lastHeight = toHeight && this.lastHeight !== null && toHeight < this.lastHeight ? toHeight : this.closedHeight;
      this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.lastHeight}px`);
      this.chRef.detectChanges();
      timer(this.transitionDuration).subscribe(() => {
        // this.renderer.removeStyle(this.elRef.nativeElement, 'height');
        this.inProgress = false;
      });
    });
  }

  expand(toHeight?: number) {
    this.inProgress = true;
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'height',
      `${toHeight && this.lastHeight !== null ? this.lastHeight : this.closedHeight}px`
    );
    this.chRef.detectChanges();
    const contentHeight = this.getContentHeight(this.elRef.nativeElement);
    this.lastHeight = toHeight && this.lastHeight !== null && toHeight > this.lastHeight ? toHeight : contentHeight;
    this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.lastHeight}px`);
    this.chRef.detectChanges();
    timer(this.transitionDuration).subscribe(() => {
      this.renderer.removeStyle(this.elRef.nativeElement, 'height');
      this.inProgress = false;
    });
  }

  private setInitialStyle() {
    this.inProgress = true;
    timer(1).subscribe(() => {
      this.lastHeight = this.open ? this.getContentHeight(this.elRef.nativeElement) : this.closedHeight;
      this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.lastHeight}px`);
      this.renderer.setStyle(this.elRef.nativeElement, 'overflow', 'hidden');
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'transition',
        `${this.transitionProperty} ${this.transitionDuration}ms ${this.transitionTimingFunction} ${this.transitionDelay}ms`
      );
      this.inProgress = false;
    });
  }

  private getContentHeight(element: any): number {
    const children = element.children;
    let contentHeight = 0;
    if (children && children.length) {
      for (const child of children) {
        contentHeight += child && child.clientHeight ? child.clientHeight : 0;
      }
    }
    contentHeight += this.getMarginHeightOfChildren(children);
    return contentHeight;
  }

  private getMarginHeightOfChildren(children: Array<any>): number {
    let totalMarginHeight = 0;
    let previousChildMarginBottom = 0;
    for (const child of children) {
      let marginTop = 0;
      let marginBottom = 0;
      try {
        marginTop = +window.getComputedStyle(child).marginTop.replace('px', '');
        marginBottom = +window.getComputedStyle(child).marginBottom.replace('px', '');
      } catch (error) {
        console.warn("Couldn't read marginTop and marginBottom property!", error);
      }
      totalMarginHeight += marginBottom + (marginTop > previousChildMarginBottom ? marginTop - previousChildMarginBottom : 0);
      previousChildMarginBottom = marginBottom;
    }
    return totalMarginHeight;
  }
}