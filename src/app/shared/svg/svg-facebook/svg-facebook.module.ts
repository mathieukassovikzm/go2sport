import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgFacebookComponent } from './svg-facebook.component';

@NgModule({
    imports: [CommonModule, SvgFacebookComponent],
    exports: [SvgFacebookComponent],
})
export class SvgFacebookModule {}
