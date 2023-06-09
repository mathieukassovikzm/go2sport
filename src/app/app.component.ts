import { AnimationEvent } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription, tap } from 'rxjs';
import { sliderAnimation } from './animation';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [sliderAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  public limiteSize = 650;
  public classCantScroll = 'cant-scroll';
  public backgroundColor = '';
  public resizeObservable$: Observable<Event>;
  public subscription$: Subscription = new Subscription();

  public isUnderLimit = false;
  public isNavOpenState = false;
  public isNavOpenState$: Observable<boolean>;

  public oldAnimationState: number | undefined = undefined;

  public prevHeight = '';

  private apiLoaded = false;

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {
    this.isNavOpenState = this.uiService.isNavOpen;
    this.backgroundColor = this.uiService.backgroundColor;

    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe((evt) => {
      this.onResize();
    });
    this.subscription$.add(subResize);

    this.isNavOpenState$ = this.uiService.subIsNavOpen.asObservable().pipe(
      tap((valNavOpen) => {
        if (this.isUnderLimit) {
          const elementBody = document.getElementsByTagName('html')[0];
          if (valNavOpen === true) {
            elementBody.classList.add(this.classCantScroll);
          } else {
            elementBody.classList.remove(this.classCantScroll);
          }
        }
      })
    );

    var subNav = this.isNavOpenState$.subscribe();
    this.subscription$.add(subNav);
  }

  ngOnInit() {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < this.limiteSize) {
      this.isUnderLimit = true;
      this.isUnderLimit = true;
    } else if (clientWidth > this.limiteSize) {
      this.isUnderLimit = false;
      this.isUnderLimit = false;
    }

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  goToTop() {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }

  onResize() {
    this.isUnderLimitSize();
  }

  isUnderLimitSize(): void {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < this.limiteSize && this.isUnderLimit === false) {
      this.isUnderLimit = true;
    } else if (clientWidth > this.limiteSize && this.isUnderLimit === true) {
      this.isUnderLimit = false;
    }
  }

  onAnimationEnterEvent(event: AnimationEvent) {
    this.prevHeight = getComputedStyle(event.element).height;
  }

  onAnimationDoneEvent(event: AnimationEvent) {
    if (event.toState == 'ActivatedRoute') {
      const { height } = getComputedStyle(event?.element);
      event.element.style.height = this.prevHeight;
      setTimeout(() => {
        event.element.style.height = height;
      });
    }
  }
}
