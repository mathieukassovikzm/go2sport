import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title-simple',
  templateUrl: './section-title-simple.component.html',
  styleUrls: ['./../section-title.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class SectionTitleSimpleComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
