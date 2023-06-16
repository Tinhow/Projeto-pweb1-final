import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent {

  usuario: Usuario = new Usuario();
  email = new FormControl();
  senha = new FormControl();

  hide = true;

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private usuarioService: UsuarioService,
  ) {}

  logar(): void {
    this.usuarioService.logar(this.usuario).subscribe(
      usuarioLogado => {
        // O usuário foi autenticado com sucesso
        console.log(usuarioLogado);
        this.roteador.navigate(['homePage']);
      },
      error => {
        // Ocorreu um erro ao autenticar o usuário
        console.log(error);
        alert('Usuário não encontrado');
      }
    );
  }

  getEmailErrorMessage() {
    return 'Por favor, forneça um email válido';
  }

  getSenhaErrorMessage(){
    return 'Por favor, forneça um email válido';

  }
}
