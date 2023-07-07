import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ImensageService {

  constructor(private snackBar: MatSnackBar) {
  }

  sucesso(mensagem: string) {
    this.abrirMensagem(mensagem, ['success']);
  }

  erro(mensagem: string) {
    this.abrirMensagem(mensagem, ['error']);
  }

  aviso(mensagem: string) {
    this.abrirMensagem(mensagem, ['warning']);
  }

  info(mensagem: string) {
    this.abrirMensagem(mensagem, ['info']);
  }

  private abrirMensagem(mensagem: string, classesExtras: string[]) {
    const snackConfig = new MatSnackBarConfig();
          snackConfig.politeness = 'assertive';
          snackConfig.duration = 3000;
          snackConfig.panelClass = classesExtras;

          this.snackBar.open(mensagem, 'Fechar', snackConfig);
  }
}
