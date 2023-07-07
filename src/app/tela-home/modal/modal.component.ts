import { ImensageService } from './../../shared/services/imensage.service';
import { UsuarioService } from './../../shared/services/usuario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/services/atividade.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AtividadeFirestoreService } from 'src/app/shared/services/atividade-firestore.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  atividade: Atividade;
  atividades: Array<Atividade> = [];
  botaoAdd = "Adicionar";
  tituloDialog = "Adicionar nova atividade";
  tipoAtividades: Array<string> = ['Musculação', 'Caminhada', 'Natação', 'Ciclismo', 'Corrida', 'Crossfit', 'Outros'];
  distanciaAtividade : Array<string> = ['N/A', '1 km', '2 km', '3 km', '5 km', '10 km', '15 km', '20 km'];
  duracaoAtividade: Array<string> = ['1 Hora', '2 Horas', '3 Horas', '4 Horas', '5 Horas',];
  botaoAdicionar: string = 'Adicionar';


  //private atividadeService: AtividadeFirestoreService
  constructor(private atividadeService: AtividadeService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private imensageService : ImensageService
    ){
    this.atividade = new Atividade();
  }

  ngOnInit() {
    if (this.data && this.data.isEdicao && this.data.atividade) {
      this.atividade = { ...this.data.atividade }; // Copia os dados da atividade recebida para o atributo 'atividade'
      this.botaoAdd = 'Alterar'; // Atualiza o valor para 'Alterar' se for uma ação de edição
      this.tituloDialog = "Editar atividade";

    } else {
      this.atividade = new Atividade(); // Cria um novo objeto 'Atividade' caso seja uma ação de criação
      this.botaoAdd = 'Adicionar'; // Mantém o valor como 'Adicionar' se for uma ação de criação
    }
  }

  cancel(): void{
    this.dialogRef.close();
  }

  // cadastrar(): void {
  //   if (this.botaoAdd === 'Adicionar') {
  //     this.atividadeService.cadastrar(this.atividade).subscribe({
  //       next: (atividade: Atividade) => {
  //         console.log(atividade);
  //         this.cancel(); // Fecha o modal após adicionar a atividade com sucesso
  //       },
  //       error: (error: any) => {
  //         console.error(error);
  //       }
  //     });
  //   } else {
  //     this.atividadeService.(this.atividade).subscribe({
  //       next: () => {
  //         console.log("Atividade atualizada com sucesso");
  //         this.atividade = new Atividade();
  //         this.cancel();
  //       },
  //       error: (error: any) => {
  //         console.error(error);
  //       }
  //     });
  //   }
  // }

  cadastrar(): void {
    if (this.botaoAdd === 'Adicionar') {
      this.atividadeService.cadastrar(this.atividade).subscribe({
        next: (atividade: Atividade) => {
          this.imensageService.sucesso('Atividade adicionada com sucesso');
          console.log(atividade);
          this.cancel(); // Fecha o modal após adicionar a atividade com sucesso
        },
        error: (error: any) => {
          this.imensageService.erro('Erro: ' + error.message);
          console.error(error);
        }
      });
    } else {
      this.atividadeService.editar(this.atividade).subscribe({
        next: () => {
          this.imensageService.sucesso('Atividade atualizada com sucesso');
          console.log("Atividade atualizada com sucesso");
          this.atividade = new Atividade();
          this.cancel();
        }
      });
    }
  }



}

