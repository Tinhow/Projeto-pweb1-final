import { Atividade } from 'src/app/shared/model/Atividade';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
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
    return this.colecaoAtividades.valueChanges({ idField: 'id' });
  }

  cadastrar(atividade: Atividade): Observable<Atividade> {
    delete atividade.id;
    const ativdadeInserida = Object.assign({}, atividade);
    return from(this.colecaoAtividades.add(ativdadeInserida)).pipe(
      map((docRef) => {
        atividade.id = docRef.id;
        return atividade;
      })
    );
  }

  pesquisarPorId(id: string): Observable<Atividade | undefined> {
    return this.colecaoAtividades.doc<Atividade>(id).get().pipe(
      map(document => {
        if (document.exists) {
          const data = document.data();
          if (data) {
            return new Atividade(document.id, data.atividade, data.distancia, data.nameTag, data.tempo);
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      })
    );
  }


  remover(id: string): Observable<void> {
    return from(this.colecaoAtividades.doc(id).delete());
  }

  editar(atividade: Atividade): Observable<void> {
    delete atividade.id;
    return from(this.colecaoAtividades.doc(atividade.id).update(Object.assign({}, atividade)));
  }

  atualizar(atividade: Atividade): Observable<void> {
    const id = atividade.id;
    delete atividade.id;
    return from(this.colecaoAtividades.doc(id).update(Object.assign({}, atividade)));
  }

}
