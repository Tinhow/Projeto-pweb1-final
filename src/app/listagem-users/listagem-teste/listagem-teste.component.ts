import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-listagem-teste',
  templateUrl: './listagem-teste.component.html',
  styleUrls: ['./listagem-teste.component.scss']
})
export class ListagemTesteComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService,  private router: Router, private rotaAtual: ActivatedRoute) {
    this.usuario = new Usuario();
  }
//problema está aqui?
  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
       }  
    );
  }

  listar(): void {
    this.usuarioService.listar().subscribe({
      next: (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      error: error => console.error(error)
    });
  }

  excluir(usuarioARemover: Usuario): void {
    this.usuarioService.excluir(usuarioARemover).subscribe(
      () => {
        console.log('Usuário excluído com sucesso');
        this.listar(); // Atualiza a lista de usuários após a exclusão
      },
      error => {
        console.error('Erro ao excluir usuário:', error);
      }
    );
  }

}
