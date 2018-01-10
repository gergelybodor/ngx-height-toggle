import {
  ChangeDetectorRef, Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2,
  SimpleChanges
} from '@angular/core';
import { NgxHeightToggleService } from './ngx-height-toggle.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[ngxHeightToggle]'
})
export class NgxHeightToggleDirective implements OnInit, OnChanges, OnDestroy {

  @Input() open: boolean;
  @Input() closedHeight = 0;
  private lastHeight: number;
  private contentChangesSubscription: Subscription;

  get closedHeightInPixels(): string {
    return this.closedHeight + 'px';
  }

  private static getContentHeight(element: any): number {
    const children = element.children;
    let contentHeight = 0;
    if (children && children.length) {
      for (const child of children) {
        contentHeight += child && child.scrollHeight ? child.scrollHeight : 0;
      }
    }
    contentHeight += NgxHeightToggleDirective.getMarginHeightOfChildren(children);
    return contentHeight;
  }

  private static getMarginHeightOfChildren(children: Array<any>): number {
    let totalMarginHeight = 0;
    let previousChildMarginBottom = 0;
    for (const child of children) {
      let marginTop = 0;
      let marginBottom = 0;
      try {
        marginTop = +window.getComputedStyle(child).marginTop.replace('px', '');
        marginBottom = +window.getComputedStyle(child).marginBottom.replace('px', '');
      } catch (error) {
        console.warn('Couldn\'t read marginTop and marginBottom property!', error);
      }
      totalMarginHeight += marginBottom + (marginTop > previousChildMarginBottom ? marginTop - previousChildMarginBottom : 0);
      previousChildMarginBottom = marginBottom;
    }
    return totalMarginHeight;
  }

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private ref: ChangeDetectorRef,
              private service: NgxHeightToggleService) { }

  ngOnInit(): void {
    this.listenForContentChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listenForOpenChanges(changes);
  }

  ngOnDestroy(): void {
    this.unsubscribeFromContentChanges();
  }

  private listenForOpenChanges(changes: SimpleChanges): void {
    if (!!changes['open'] && !!changes['open'].previousValue !== !!changes['open'].currentValue && !changes['open'].firstChange) {
      // only initiate expand and collapse when input value changes after is gets set by the component
      if (changes['open'].currentValue) {
        this.expandSection(this.elRef.nativeElement);
      } else {
        this.collapseSection(this.elRef.nativeElement);
      }
    } else if (!!changes['open'] && !changes['open'].currentValue && changes['open'].firstChange) {
      // set section height to closedHeight if initial input value is false
      this.renderer.setStyle(this.elRef.nativeElement, 'height', this.closedHeightInPixels);
    }
  }

  private listenForContentChanges(): void {
    this.contentChangesSubscription = this.service.contentChanges.subscribe(() => {
      this.ref.detectChanges();
      if (this.open) {
        this.changeSectionHeight(this.elRef.nativeElement);
      }
    });
  }

  private changeSectionHeight(element: any): void {
    const previousSectionHeight = element.scrollHeight;
    const contentHeight = NgxHeightToggleDirective.getContentHeight(element);
    if (previousSectionHeight <= contentHeight) {
      this.expandSection(element, contentHeight);
    } else {
      this.collapseSection(element, previousSectionHeight, contentHeight);
    }
  }

  private unsubscribeFromContentChanges(): void {
    if (this.contentChangesSubscription) {
      this.contentChangesSubscription.unsubscribe();
    }
  }

  private expandSection(element: any, contentHeight?: number): void {
    // get the height of the element's inner content, regardless of its actual size
    const sectionHeight = contentHeight !== undefined ? contentHeight : element.scrollHeight;
    // check whether last height set by last operation is equal to desired height
    if (this.lastHeight === sectionHeight) {
      // if so don't execute
      return;
    }
    // else set last known height to desired height
    this.lastHeight = sectionHeight;
    // have the element transition to the height of its inner content
    this.renderer.setStyle(element, 'height', sectionHeight + 'px');
  }

  private collapseSection(element: any, previousSectionHeight?: number, contentHeight?: number): void {
    // get the height of the element's inner content, regardless of its actual size
    const sectionHeight = previousSectionHeight !== undefined ? previousSectionHeight : element.scrollHeight;
    // check whether operation initiated by content change
    if (contentHeight !== undefined) {
      // check whether last height set by last operation is equal to desired height
      if (this.lastHeight === contentHeight) {
        // don't execute
        return;
      } else {
        // set last known height to desired height
        this.lastHeight = contentHeight;
      }
    } else {
      // when content didn't change we want to collapse height to closedHeight, so set last known height to closedHeight
      this.lastHeight = this.closedHeight;
    }
    // temporarily disable all css transitions
    const elementTransition = element.style.transition;
    this.renderer.setStyle(element, 'transition', '');
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    this.renderer.setStyle(element, 'height', sectionHeight + 'px');
    this.renderer.setStyle(element, 'transition', elementTransition);
    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    this.renderer.setStyle(element, 'height', (contentHeight !== undefined ? contentHeight : this.closedHeight) + 'px');
  }

}
