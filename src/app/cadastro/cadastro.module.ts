import { NgModule } from '@angular/core';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    TelaLoginComponent,
    TelaCadastroComponent
  ],
  imports: [
    PipesModule,
    ComponentesAngularModule

  ],
  exports:[
    TelaLoginComponent,
    TelaCadastroComponent
  ]
})
export class CadastroModule { }
