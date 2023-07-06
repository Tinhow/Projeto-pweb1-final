import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ComponentesAngularModule } from './componentes-angular/componentes-angular.module';
import { ListagemUsersModule } from './listagem-users/listagem-users.module';
import { LayoutModule } from './layout/layout.module';
import { FirestoreModule } from './firestore/firestore.module';
import { TelaHomeModule } from './tela-home/tela-home.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { AboutusComponent } from './tela-about/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent
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
