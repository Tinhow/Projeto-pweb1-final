import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  botaoHome = 'FITRACKER';
  botaoTable = 'Listar Usuários - Tabela';
  botaoSign= 'Cadastrar Usuário';

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
  ){
    
  }
  goHome(): void {
    if(this.botaoHome === 'FITRACKER'){
      this.roteador.navigate(['/homePage']);
    }}

  goSign(): void{
    if(this.botaoSign === 'Cadastrar Usuário'){
      this.roteador.navigate(['/cadastro'])


    }
  }
}
