import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';
import { PipesModule } from '../pipes/pipes.module';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    HomeComponent,
    ModalComponent,

  ],
  imports: [
    CommonModule,
    ComponentesAngularModule,
    PipesModule,
    MatDialogModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class TelaHomeModule { }
