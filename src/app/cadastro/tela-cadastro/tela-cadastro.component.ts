import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent {
  usuario: Usuario;
  estahCadastrando = true;
  botaoSalvar = 'Cadastrar';

  nome = new FormControl();
  email = new FormControl();
  senha = new FormControl();
  cpf = new FormControl();
  idade = new FormControl();

  hide = true;

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private usuarioService: UsuarioFirestoreService
  ) {
    this.usuario = new Usuario();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {

      this.estahCadastrando = false;
      this.botaoSalvar = 'Salvar';
      this.usuarioService.pesquisarPorId(String(idParaEdicao)).subscribe(
        usuario => {
          if (usuario) {
            this.usuario = usuario;
          }
        }
      );
    }
  }

  cadastrar(): void {
    if(this.botaoSalvar === 'Salvar'){
      this.usuarioService.atualizar(this.usuario).subscribe();
      console.log(this.usuario);
      this.roteador.navigate(['/homePage']);
    }
    else{
      this.usuarioService.inserir(this.usuario).subscribe(
        (usuarioCadastrado: Usuario) => {
          console.log(usuarioCadastrado);
          this.roteador.navigate(['/homePage']);
          this.usuario = new Usuario();
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }


  getNameErrorMessage(): string {
    return 'Por favor, forneça seu nome.';
  }

  getEmailErrorMessage(): string {
    return 'Por favor, forneça um email válido.';
  }

  getSenhaErrorMessage(): string {
    return 'Por favor, forneça uma senha válida.';
  }

  getCPFErrorMessage(): string {
    return 'Por favor, forneça um CPF válido.';
  }

  getIdadeErrorMessage(): string {
    return 'Por favor, forneça uma idade válida.';
  }
}
