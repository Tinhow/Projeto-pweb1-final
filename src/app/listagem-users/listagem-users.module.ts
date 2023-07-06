import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemTesteComponent } from './listagem-teste/listagem-teste.component';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';
import { LayoutModule } from "../layout/layout.module";

@NgModule({
    declarations: [
        ListagemTesteComponent
    ],
    exports: [
        ListagemTesteComponent
    ],
    imports: [
        CommonModule,
        ComponentesAngularModule,
        LayoutModule
    ]
})
export class ListagemUsersModule { }
