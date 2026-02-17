
import { Component, OnInit, input } from '@angular/core';
import { IActivityModel } from 'src/app/models/activity';
import { ActivityComponent } from './activity/activity.component';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss'],
  imports: [ActivityComponent],
  standalone: true
})
export class ListActivitiesComponent implements OnInit {
  readonly listActivities = input<IActivityModel[]>([]);
  constructor() { }

  ngOnInit() { }
}
