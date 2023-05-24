import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemTesteComponent } from './listagem-teste/listagem-teste.component';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';



@NgModule({
  declarations: [
    ListagemTesteComponent
  ],
  imports: [
    CommonModule,
    ComponentesAngularModule,
  ],
  exports:[
    ListagemTesteComponent
  ]
})
export class ListagemUsersModule { }
