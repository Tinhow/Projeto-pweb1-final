import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/services/atividade.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  atividades: Array<Atividade> = [];
  atividade: Atividade;

  constructor(public dialog: MatDialog, private atividadeService: AtividadeService,  private router: Router, private rotaAtual: ActivatedRoute) {
    this.atividade = new Atividade();
  }

  ngOnInit(): void {
    this.atividadeService.listar().subscribe(
      (atividades: Atividade[]) => {
        this.atividades = atividades;
      }
    );
  }
  openDialog() {
    this.dialog.open(ModalComponent);
  }

  listar(): void {
    this.atividadeService.listar().subscribe({
      next: (atividades: Atividade[] ) => {
        this.atividades = atividades;
      },
      error: error => console.error(error)
    });
  }

  excluir(atvARemover: Atividade): void {
    this.atividadeService.excluir(atvARemover).subscribe(
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
