import { CADASTROLIST } from './../../shared/model/CADASTROLIST';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { USUARIO } from 'src/app/shared/model/USUARIO';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent {

  usuario: USUARIO;
  usuarios = CADASTROLIST;
  email = new FormControl();
  senha = new FormControl();

  hide = true;


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router){
    this.usuario = new USUARIO()

  }

  logar(): void {
    const usuarioEncontrado = this.usuarios.find(usuario => usuario.email === this.usuario.email && usuario.senha === this.usuario.senha);
    if (usuarioEncontrado) {
      console.log(usuarioEncontrado);
      this.roteador.navigate(['homePage']);
    } else {
      alert('Usuário não encontrado');
    }
  }

  getEmailErrorMessage() {
    return 'por favor, forneça um Email válido';
  }

  getSenhaErrorMessage() {
    return 'por favor, forneça uma Senha válida';
  }


}
