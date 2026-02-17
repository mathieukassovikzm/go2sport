import { Component, OnInit, input } from '@angular/core';
import { IStickerModel } from 'src/app/models/sticker';

import { StickerComponent } from './sticker/sticker.component';

@Component({
  selector: 'app-list-stickers',
  templateUrl: './list-stickers.component.html',
  styleUrls: ['./list-stickers.component.scss'],
  imports: [StickerComponent],
  standalone: true
})
export class ListStickersComponent implements OnInit {
  readonly listOfStickers = input<IStickerModel[]>([]);
  constructor() { }

  ngOnInit() { }
}
