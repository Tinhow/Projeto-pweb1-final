export class Atividade {
  id?: string;
  exercicio = '';
  nameTag = '';
  distancia = '';
  tempo = '';

  constructor(id?: string, atividade: Atividade = { exercicio: '', nameTag: '', distancia: '', tempo: '' }) {
    this.id = id;
    this.exercicio = atividade.exercicio;
    this.nameTag = atividade.nameTag;
    this.distancia = atividade.distancia;
    this.tempo = atividade.tempo;
  }
}


