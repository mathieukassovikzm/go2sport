import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgRaquettesComponent } from './svg-raquettes.component';

@NgModule({
    imports: [CommonModule, SvgRaquettesComponent],
    exports: [SvgRaquettesComponent],
})
export class SvgRaquettesModule {}
