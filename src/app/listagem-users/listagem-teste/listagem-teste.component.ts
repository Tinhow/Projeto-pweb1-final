import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
 import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';
import { MenuComponent } from 'src/app/layout/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
 @Component({
  selector: 'app-listagem-teste',
  templateUrl: './listagem-teste.component.html',
  styleUrls: ['./listagem-teste.component.scss']
})
export class ListagemTesteComponent implements OnInit {

  dataSource: MatTableDataSource<Usuario>;
  mostrarColunas = ['nome', 'cpf', 'idade','acoes'];


  //usuarioService: UsuarioFirestoreService
  constructor(private usuarioService: UsuarioService, private roteador: Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.dataSource = new MatTableDataSource(usuarios)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  // apagar(id: number): void {
  //   console.log('apagando');
  //    this.usuarioService.apagar(String(id)).subscribe(
  //      apagado => {
  //        const indx = this.dataSource.data.findIndex(usuario => usuario.id === String(id));
  //        if (indx > -1) {
  //          this.dataSource.data.splice(indx, 1);
  //          this.dataSource = new MatTableDataSource<Usuario>(this.dataSource.data);
  //        }
  //      }
  //   );
  // }

  apagar(id: number): void {
    console.log('apagando');
     this.usuarioService.excluir(id).subscribe(
       apagado => {
         const indx = this.dataSource.data.findIndex(usuario => usuario.id === (id));
         if (indx > -1) {
           this.dataSource.data.splice(indx, 1);
           this.dataSource = new MatTableDataSource<Usuario>(this.dataSource.data);
         }
       }
    );
  }

  editar(usuario: Usuario): void {
    console.log('editando');
    this.roteador.navigate(['cadastro', usuario.id]);
  }
}
