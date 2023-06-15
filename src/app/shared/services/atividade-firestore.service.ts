import { Atividade } from 'src/app/shared/model/Atividade';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeFirestoreService {

  colecaoAtividades: AngularFirestoreCollection<Atividade>;
  NOME_COLECAO = 'atividades';

  constructor(private afs: AngularFirestore) {
    this.colecaoAtividades = afs.collection<Atividade>(this.NOME_COLECAO);
  }

  listar(): Observable<Atividade[]> {
    return this.colecaoAtividades.valueChanges({idField: 'id'});
  }

  inserir(atividade: Atividade): Observable<Atividade> {
    delete atividade.id;
    return from(this.colecaoAtividades.add(Object.assign({}, atividade)));
  }

  pesquisarPorId(id: string): Observable<Atividade> {
    const doc = this.colecaoAtividades.doc(id).get();
    doc.subscribe(d => console.log(d));

    return doc.pipe(map(document => new Atividade(document.id, document.data())));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoAtividades.doc(id).delete());
  }

  alterar(atividade: Atividade): Observable<void> {
    delete atividade.id;
    return from(this.colecaoAtividades.doc(atividade.id).update(Object.assign({}, atividade)));
  }

}
