import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/services/atividade.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  // @Output() atividadeAdicionada: EventEmitter<void> = new EventEmitter<void>
  atividade: Atividade;
  atividades: Array<Atividade> = [];
  botaoAdd = "Adicionar";
  nwatividade = new Atividade();
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
    if (this.botaoAdd === "Adicionar") {
      this.atividadeService.cadastrar(this.atividade).subscribe(
        response => {
          // this.atividadeAdicionada.emit();
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
      

  

