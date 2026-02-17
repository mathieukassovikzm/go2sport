import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-item-spp',
  templateUrl: './item-spp.component.html',
  styleUrls: ['./item-spp.component.scss'],
  standalone: true,
})
export class ItemSppComponent implements OnInit {
  readonly elementSpp = input<any>();
  constructor() { }

  ngOnInit() { }

  getClassImg(): string {
    return `item-spp-img-ctn spp-elt-${this.elementSpp().name}`;
  }
}
