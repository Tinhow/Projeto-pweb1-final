import { CADASTROLIST } from './../../shared/model/CADASTROLIST';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { USUARIO } from 'src/app/shared/model/USUARIO';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent {

  usuario: USUARIO
  usuarios = CADASTROLIST;
  estahCadastrando = true;
  botaoSalvar = 'Cadastrar';
  
  nome = new FormControl();
  email = new FormControl();
  senha = new FormControl();
  cpf = new FormControl();
  idade = new FormControl();

  hide = true;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.usuario = new USUARIO();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const usuarioEncontrado = this.usuarios.find(
        usuario => usuario.cpf === idParaEdicao);
      if (usuarioEncontrado) {
        this.estahCadastrando = false;
        this.botaoSalvar = 'Salvar';
        this.usuario = usuarioEncontrado;
      }
    } else {
      this.botaoSalvar = 'Cadastrar';
    }

  }

  cadastrar(): void {
    if (this.usuario && this.usuario.cpf) { // Verifica se o CPF foi fornecido
      const index = this.usuarios.findIndex(u => u.cpf === this.usuario.cpf);
      if (index >= 0) {
        // Atualizando usuário existente
        this.usuarios[index] = this.usuario;
      } else {
        // Adicionando novo usuário
        this.usuarios.push(this.usuario);
      }
      this.usuario = new USUARIO();
      this.botaoSalvar = 'Cadastrar';
      this.roteador.navigate(['homePage']);
    } else {
      alert('Por favor, forneça um CPF válido.');
    }
  }


  getNameErrorMessage() {
    return 'Por favor, forneça seu nome.';
  }
  getEmailErrorMessage() {
    return 'Por favor, forneça um email válido.';
  }
  getSenhaErrorMessage() {
    return 'Por favor, forneça uma senha válida.';
  }
  getCPFErrorMessage() {
    return 'Por favor, forneça um CPF válido.';
  }
  getIdadeErrorMessage() {
    return 'Por favor, forneça uma idade válida.';
  }


}









