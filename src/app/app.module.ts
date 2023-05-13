import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CadastroModule } from './cadastro/cadastro.module';
import { ComponentesAngularModule } from './componentes-angular/componentes-angular.module';
import { TelaHomeModule } from './tela-home/tela-home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentesAngularModule,
    CadastroModule,
    TelaHomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
