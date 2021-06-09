import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimiasComponent } from './grade-fotos-animias/grade-fotos-animias.component';


@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimiasComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
