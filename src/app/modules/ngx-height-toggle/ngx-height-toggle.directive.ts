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
import { timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  get currentHeight(): number {
    return this.elRef.nativeElement.getBoundingClientRect().height;
  }

  get transitionValue(): string {
    return `${this.transitionProperty} ${this.transitionDuration}ms ${this.transitionTimingFunction} ${this.transitionDelay}ms`;
  }

  private inProgress = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private chRef: ChangeDetectorRef) {}

  ngOnInit() {
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
      if (this.currentHeight > contentHeight) {
        this.collapse(contentHeight);
      } else if (this.currentHeight < contentHeight) {
        this.expand(contentHeight);
      }
    }
  }

  collapse(toHeight?: number) {
    this.inProgress = true;
    this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.currentHeight}px`);
    timer(1).subscribe(() => {
      this.renderer.setStyle(this.elRef.nativeElement, 'height', `${toHeight ? toHeight : this.closedHeight}px`);
      timer(this.transitionDuration).subscribe(() => {
        this.inProgress = false;
      });
    });
  }

  expand(toHeight?: number) {
    this.inProgress = true;
    this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.currentHeight}px`);
    const contentHeight = this.getContentHeight(this.elRef.nativeElement);
    this.renderer.setStyle(this.elRef.nativeElement, 'height', `${toHeight ? toHeight : contentHeight}px`);
    timer(this.transitionDuration).subscribe(() => {
      console.log(this.currentHeight, contentHeight);
      // if (!this.enableChangeDetection && Math.ceil(this.currentHeight) === contentHeight) {
      //   this.renderer.removeStyle(this.elRef.nativeElement, 'height');
      // }

      if (!this.enableChangeDetection) {
        if (this.currentHeight === contentHeight) {
          this.renderer.removeStyle(this.elRef.nativeElement, 'height');
        } else {
          interval(100)
            .pipe(takeUntil(timer(500)))
            .subscribe(() => {
              if (this.currentHeight === contentHeight) {
                this.renderer.removeStyle(this.elRef.nativeElement, 'height');
              }
            });
        }
      }

      this.inProgress = false;
    });
  }

  private setInitialStyle() {
    this.inProgress = true;
    this.renderer.setStyle(this.elRef.nativeElement, 'transition', this.transitionValue);
    this.renderer.setStyle(this.elRef.nativeElement, 'overflow', 'hidden');
    if (!this.open) {
      this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.closedHeight}px`);
      this.inProgress = false;
    } else {
      timer(1).subscribe(() => {
        const contentHeight = this.getContentHeight(this.elRef.nativeElement);
        this.renderer.setStyle(this.elRef.nativeElement, 'height', `${contentHeight}px`);
        this.inProgress = false;
      });
    }
  }

  private getContentHeight(element: any): number {
    const children = element.children;
    let contentHeight = 0;
    if (children && children.length) {
      for (const child of children) {
        contentHeight += child && child.clientHeight ? child.clientHeight : 0;
        console.log(child.clientHeight, child.offsetHeight, child.scrollHeight);
      }
    }
    contentHeight += this.getMarginHeightOfChildren(children);
    return contentHeight;
  }

  private getMarginHeightOfChildren(children: Array<any>): number {
    let totalMarginHeight = 0;
    let previousChildMarginBottom = 0;
    for (const child of children) {
      const marginTop = +window.getComputedStyle(child).marginTop.replace('px', '');
      const marginBottom = +window.getComputedStyle(child).marginBottom.replace('px', '');
      totalMarginHeight += marginBottom + (marginTop > previousChildMarginBottom ? marginTop - previousChildMarginBottom : 0);
      previousChildMarginBottom = marginBottom;
    }
    return totalMarginHeight;
  }
}
