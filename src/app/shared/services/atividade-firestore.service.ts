import { Atividade } from 'src/app/shared/model/Atividade';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,  DocumentData} from '@angular/fire/compat/firestore';
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

  pesquisarPorId(id: string): Observable<Atividade> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    return this.colecaoAtividades.doc(id).get().pipe(map(document => new Atividade(document.id, document.data())));
  }


  apagar(id: string): Observable<void> {
    return from(this.colecaoAtividades.doc(id).delete());
  }

  editar(atividade: Atividade): Observable<void> {
    const id = atividade.id;
    const atividadeAtualizada = { ...atividade };
    delete atividadeAtualizada.id;

    return from(this.colecaoAtividades.doc(id).set(atividadeAtualizada, { merge: true }));
  }


  atualizar(atividade: Atividade): Observable<void> {
    const id = atividade.id;
    const atividadeAtualizada = { ...atividade };
    delete atividadeAtualizada.id;

    return from(this.colecaoAtividades.doc(id).update(atividadeAtualizada as DocumentData));
  }

}



