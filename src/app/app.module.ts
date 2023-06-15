import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CadastroModule } from './cadastro/cadastro.module';
import { ComponentesAngularModule } from './componentes-angular/componentes-angular.module';
import { TelaHomeModule } from './tela-home/tela-home.module';
import { ListagemUsersModule } from './listagem-users/listagem-users.module';
import { LayoutModule } from './layout/layout.module';
import { FirestoreModule } from './firestore/firestore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentesAngularModule,
    CadastroModule,
    TelaHomeModule,
    ListagemUsersModule,
    LayoutModule,
    FirestoreModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
