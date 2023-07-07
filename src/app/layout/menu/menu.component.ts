import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalcontatoComponent } from './modalcontato/modalcontato.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  botaoHome = 'FITRACKER';
  botaoTable = 'Listar Usuários - Tabela';
  botaoSign= 'Cadastrar Usuário';
  botaoAbout = 'Sobre Nós';

  constructor(
    private rotaAtual: ActivatedRoute,
    public dialog: MatDialog,
    private roteador: Router,
  ){
    
  }
  goHome(): void {
    if(this.botaoHome === 'FITRACKER'){
      this.roteador.navigate(['/homePage']);
    }}
  goTable(): void{
    if(this.botaoTable === 'Listar Usuários - Tabela'){
      this.roteador.navigate(['/listagemUsers'])
    }
  }
  goSign(): void{
    if(this.botaoSign === 'Cadastrar Usuário'){
      this.roteador.navigate(['/cadastro'])


    }
  }
  goAbout(): void{
    if(this.botaoAbout === 'Sobre Nós'){
      this.roteador.navigate(['/aboutUs'])


    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalcontatoComponent);
  }
}
