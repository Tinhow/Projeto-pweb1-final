export class Atividade {
  id?: number;
  exercicio?: string;
  nameTag?: string;
  distancia?: string;
  tempo?: string;

  constructor(id?: number, atividade: Atividade = {}) {
    this.id = id;
    this.exercicio = atividade.exercicio;
    this.nameTag = atividade.nameTag;
    this.distancia = atividade.distancia;
    this.tempo = atividade.tempo;
  }
}


// export class Atividade {
//   id: number;
//   exercicio = '';
//   nameTag = '';
//   distancia = '';
//   tempo = '';

//   constructor(id: number, atividade: Atividade = {id : 0, exercicio: '', nameTag: '', distancia: '', tempo: '' }) {
//     this.id = id;
//     this.exercicio = atividade.exercicio;
//     this.nameTag = atividade.nameTag;
//     this.distancia = atividade.distancia;
//     this.tempo = atividade.tempo;
//   }
// }


