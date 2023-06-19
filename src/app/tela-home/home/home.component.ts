import { Component } from '@angular/core';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/services/atividade.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { AtividadeFirestoreService } from 'src/app/shared/services/atividade-firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  atividades: Atividade[] = [];

  constructor(
    public dialog: MatDialog,
    private atividadeService: AtividadeFirestoreService
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  openDialog(isEdicao: boolean, atividade?: Atividade) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        isEdicao: isEdicao,
        atividade: atividade
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listar();
    });
  }


  listar(): void {
    this.atividadeService.listar().subscribe({
      next: (atividades: Atividade[]) => {
        this.atividades = atividades;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }


  excluir(atividade: Atividade): void {
    const atividadeId: string = atividade.id || ''; // Verifica se atividade.id está definido, caso contrário, atribui uma string vazia

    this.atividadeService.apagar(atividadeId).subscribe({
      next: () => {
        this.listar();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }


  editar(atividade: Atividade): void {
    this.atividadeService.editar(atividade).subscribe({
      next: () => {
        this.listar();
        this.openDialog(true, atividade);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }



}
