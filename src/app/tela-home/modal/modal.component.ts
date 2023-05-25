import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/services/atividade.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  atividade: Atividade;
  atividades: Array<Atividade> = [];
  botaoAdd = "Adicionar";
  nwatividade = new Atividade();


  constructor(public dialoRef: MatDialogRef<ModalComponent>,private atividadeService: AtividadeService, public dialog: MatDialog) {
    this.atividade = new Atividade();
  }
  ngOnInit(): void {
  }
  cancel(): void{
    this.dialoRef.close();
  }
  cadastrar(): void {
    if (this.botaoAdd === "Adicionar") {
      this.atividadeService.cadastrar(this.atividade).subscribe(
        response => {
          this.atividades.push(this.atividade);
          this.atividade = new Atividade();
          this.dialoRef.close();
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
      

  

