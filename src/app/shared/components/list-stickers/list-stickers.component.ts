import { Component, Input, OnInit } from '@angular/core';
import { IStickerModel } from 'src/app/models/sticker';
import { CommonModule, NgFor } from '@angular/common';
import { StickerComponent } from './sticker/sticker.component';

@Component({
  selector: 'app-list-stickers',
  templateUrl: './list-stickers.component.html',
  styleUrls: ['./list-stickers.component.scss'],
  imports: [CommonModule, StickerComponent],
  standalone: true
})
export class ListStickersComponent implements OnInit {
  @Input() listOfStickers: IStickerModel[] = [];
  constructor() { }

  ngOnInit() { }
}
