import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { MsgbarService } from 'src/app/shared/services/msgbar.service';

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
    private roteador: Router,
    //private usuarioService: UsuarioFirestoreService,
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
        console.log(error)
      }
    );
  }

  getEmailErrorMessage() {
    return 'Por favor, forneça um email válido';
  }

  getSenhaErrorMessage() {
    return 'Por favor, forneça uma senha válida';
  }
}
