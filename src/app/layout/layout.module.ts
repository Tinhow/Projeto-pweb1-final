import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';
import { RodapeComponent } from './rodape/rodape.component';
import { Router } from '@angular/router';
import { ModalcontatoComponent } from './menu/modalcontato/modalcontato.component';


@NgModule({
  declarations: [
    MenuComponent,
    RodapeComponent,
    ModalcontatoComponent
  ],
  imports: [
    CommonModule,
    ComponentesAngularModule
  ],
  exports: [
    MenuComponent,
    RodapeComponent
  ]
})
export class LayoutModule { }
