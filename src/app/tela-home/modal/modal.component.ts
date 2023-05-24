import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/services/atividade.service';
import { MatDialogModule ,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  atividade: Atividade;
  atividades: Array<Atividade> = [];
  botaoAdd = "Adicionar";
  // nameTag = new FormControl();
  // atv = new FormControl();
  // distancia = new FormControl();
  // tempo = new FormControl();

  constructor(public dialoRef: MatDialogRef<ModalComponent>,private atividadeService: AtividadeService, public dialog: MatDialog) {
    this.atividade = new Atividade();
  }
  ngOnInit(): void {
    //   this.fm = this.fb.group({
    //   nameTag: ['', [Validators.required]],
    //   atividade: ['', [Validators.required]],
    //   distancia: ['', [Validators.required]],
    //   tempo: ['', [Validators.required]],

    // })
  }
  cancel(): void{
    this.dialoRef.close();
  }
  cadastrar(): void {
    if(this.botaoAdd === "Adicionar"){
      this.atividadeService.cadastrar(this.atividade).subscribe();
      console.log(this.atividade);
      this.cancel();
      window.location.reload();
      error: (error: any) => {
        console.error(error);
      }
    };
  }}

