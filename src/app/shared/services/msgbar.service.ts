import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MsgbarService {

  constructor(private snackBar: MatSnackBar) {
  }

  errBar(msg: string): void {
    this.abrirSnackBar(msg, ['error']);
  }

  warning(msg: string): void {
    this.abrirSnackBar(msg, ['warning']);
  }

  info(msg: string): void {
    this.abrirSnackBar(msg, ['info']);
  }

  success(msg: string): void {
    this.abrirSnackBar(msg, ['success']);
  }

  private abrirSnackBar(msg: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 10000;
    config.politeness = 'assertive';
    config.panelClass = extraClasses;
    this.snackBar.open(msg, 'X', config);
  }

}
