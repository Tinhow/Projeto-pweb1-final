import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService,  private router: Router, private rotaAtual: ActivatedRoute) {
    this.usuario = new Usuario();
  }

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
