import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';
import { ListActivitiesComponent } from '../../../shared/components/list-activities/list-activities.component';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';

@Component({
  selector: 'app-see-activitees',
  templateUrl: './see-activitees.component.html',
  styleUrls: ['./see-activitees.component.scss'],
  imports: [SectionTitleBkgBlkComponent, ListActivitiesComponent],
  standalone: true,
})
export class SeeActiviteesComponent implements OnInit {
  public activitees;
  constructor(private seeService: SeeService) {
    this.activitees = this.seeService.seeListActivities;
  }

  ngOnInit() { }
}
