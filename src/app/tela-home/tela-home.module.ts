import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';
import { CadastroModule } from '../cadastro/cadastro.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentesAngularModule,
    PipesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class TelaHomeModule { }
