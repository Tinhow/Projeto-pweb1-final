import { Component } from '@angular/core';
import { CADASTROLIST } from 'src/app/shared/model/CADASTROLIST';
import { USUARIO } from 'src/app/shared/model/USUARIO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  usuarios = CADASTROLIST

  excluir(usuarioARemover: USUARIO): void {
    const index = this.usuarios.findIndex(usuario =>
      usuario.cpf === usuarioARemover.cpf);

    this.usuarios.splice(index, 1);
  }

}
