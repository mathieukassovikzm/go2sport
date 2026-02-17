
import { Component, OnInit, output } from '@angular/core';
import { SvgArrowsComponent } from '../../svg/svg-arrows/svg-arrows.component';

@Component({
  selector: 'app-btn-cartoon',
  templateUrl: './btn-cartoon.component.html',
  styleUrls: ['./btn-cartoon.component.scss'],
  imports: [SvgArrowsComponent],
  standalone: true
})
export class BtnCartoonComponent implements OnInit {
  readonly btnClicked = output<string>();

  constructor() { }

  ngOnInit() { }

  goToLink() {
    this.btnClicked.emit('btnClicked');
  }
}
