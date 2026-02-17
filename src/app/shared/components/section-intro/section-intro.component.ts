import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit, input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { BtnCartoonComponent } from '../btn-cartoon/btn-cartoon.component';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss'],
  imports: [BtnCartoonComponent],
  standalone: true,
})
export class SectionIntroComponent implements OnInit, AfterViewInit {
  readonly titleInfos = input<any>();

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() { }

  ngAfterViewInit() { }

  goToLink() {
    this.uiService.moveSlowToId(
      this.viewportScroller,
      `${this.titleInfos().link}`
    );
  }
}
