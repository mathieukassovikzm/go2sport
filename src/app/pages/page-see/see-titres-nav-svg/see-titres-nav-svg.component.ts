import { Component, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';
import { SeeService } from 'src/app/services/see.service';
import { ListTitleNavSvgComponent } from '../../../shared/components/list-title-nav-svg/list-title-nav-svg.component';
import { SectionTitleSimpleComponent } from '../../../shared/components/section-title/section-title-simple/section-title-simple.component';

@Component({
  selector: 'app-see-titres-nav-svg',
  templateUrl: './see-titres-nav-svg.component.html',
  imports: [SectionTitleSimpleComponent, ListTitleNavSvgComponent],
  standalone: true,
})
export class SeeTitresNavSvgComponent implements OnInit {
  public listTitle: IPageNavModel[] = [];
  constructor(private seeService: SeeService) {
    this.listTitle = this.seeService.listTitle;
  }

  ngOnInit() { }
}
