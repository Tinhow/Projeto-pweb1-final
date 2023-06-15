import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, defer, from, map, switchMap } from 'rxjs';
import { Usuario } from '../model/Usuario';
import{AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>
  NOME_COLECAO = 'users';
  constructor(private afs: AngularFirestore) {
   this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar (): Observable<Usuario[]> {
    return this.colecaoUsuarios.valueChanges({idField:'id'});
  }

  inserir(usuario : Usuario): Observable<object> {
    return from(this.colecaoUsuarios.add(Object.assign({}, usuario)));
  }

  atualizar(usuario: Usuario): Observable<void> {
    const id= `${usuario.id}`;
    //delete usuario.id;

    return from(this.colecaoUsuarios.doc(id).update(Object.assign({}, usuario)));
  }

}




