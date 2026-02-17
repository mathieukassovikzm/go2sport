
import { Component, Input, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';
import { TitleNavComponent } from './title-nav/title-nav.component';

@Component({
  selector: 'app-list-title-nav',
  templateUrl: './list-title-nav.component.html',
  styleUrls: ['./list-title-nav.component.scss'],
  imports: [TitleNavComponent],
  standalone: true
})
export class ListTitleNavComponent implements OnInit {
  @Input() listOfTitles: IPageNavModel[] = [];

  constructor() { }

  ngOnInit() { }
}
