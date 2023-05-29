import { UsuarioService } from './../../shared/services/usuario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/services/atividade.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  atividade: Atividade;
  atividades: Array<Atividade> = [];
  botaoAdd = "Adicionar";
  tituloDialog = "Adicionar nova atividade"

  constructor(private atividadeService: AtividadeService,public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.atividade = new Atividade();
  }

  ngOnInit() {
    if (this.data && this.data.isEdicao && this.data.atividade) {
      this.atividade = { ...this.data.atividade }; // Copia os dados da atividade recebida para o atributo 'atividade'
      this.botaoAdd = 'Alterar'; // Atualiza o valor para 'Alterar' se for uma ação de edição
      this.tituloDialog = "Editar atividade"
    } else {
      this.atividade = new Atividade(); // Cria um novo objeto 'Atividade' caso seja uma ação de criação
      this.botaoAdd = 'Adicionar'; // Mantém o valor como 'Adicionar' se for uma ação de criação
    }
  }

  cancel(): void{
    this.dialogRef.close();
  }

  cadastrar(): void {
    if (this.botaoAdd === 'Adicionar') {
      this.atividadeService.cadastrar(this.atividade).subscribe({
        next: () => {
          this.cancel();
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    } else {
      this.atividadeService.editar(this.atividade).subscribe({
        next: () => {
          this.cancel();
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }

}

