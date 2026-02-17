import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-page-ml',
  templateUrl: './page-ml.component.html',
  styleUrls: ['./page-ml.component.scss'],
  imports: [FooterComponent],
  standalone: true,
})
export class PageMlComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
