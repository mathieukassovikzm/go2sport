import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-page-pc',
  templateUrl: './page-pc.component.html',
  styleUrls: ['./page-pc.component.scss'],
  imports: [FooterComponent]
})
export class PagePcComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
