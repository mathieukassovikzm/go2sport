
import { Component, Input, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';
import { TitleNavSvgComponent } from './title-nav-svg/title-nav-svg.component';

@Component({
  selector: 'app-list-title-nav-svg',
  templateUrl: './list-title-nav-svg.component.html',
  styleUrls: ['./list-title-nav-svg.component.scss'],
  imports: [TitleNavSvgComponent],
  standalone: true,
})
export class ListTitleNavSvgComponent implements OnInit {
  @Input() listOfTitles: IPageNavModel[] = [];

  constructor() { }

  ngOnInit() { }
}
