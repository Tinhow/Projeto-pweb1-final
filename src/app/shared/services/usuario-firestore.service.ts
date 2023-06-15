import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import { Usuario } from '../model/Usuario';


@Injectable({
 providedIn: 'root'
})
export class UsuarioFirestoreService {


 colecaoUsuarios: AngularFirestoreCollection<Usuario>;
 NOME_COLECAO = 'users';


 constructor(private afs: AngularFirestore) {
   this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
 }


 listar(): Observable<Usuario[]> {
   return this.colecaoUsuarios.valueChanges({idField: 'id'});
 }

 inserir(usuario: Usuario): Observable<Usuario> {
  delete usuario.id;
  const usuarioInserido = Object.assign({}, usuario);
  return from(this.colecaoUsuarios.add(usuarioInserido)).pipe(
    map((docRef) => {
      usuario.id = docRef.id;
      return usuario;
    })
  );
}

 apagar(id: string): Observable<void> {
   return from(this.colecaoUsuarios.doc(id).delete());
 }

  pesquisarPorId(id: string): Observable<Usuario | undefined> {
    return this.colecaoUsuarios.doc<Usuario>(id).get().pipe(
      map(document => {
        if (document.exists) {
          const data = document.data();
          if (data) {
            return new Usuario(document.id, data.nome, data.email, data.senha, data.cpf, data.idade);
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      })
    );
  }

 atualizar(usuario: Usuario): Observable<void> {
    const id = usuario.id;
    delete usuario.id;
    return from(this.colecaoUsuarios.doc(id).update(Object.assign({}, usuario)));
  }


 listarMaioresDeIdade(): Observable<Usuario[]> {
   let usuariosMaioresIdade: AngularFirestoreCollection<Usuario>;
   usuariosMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
   return usuariosMaioresIdade.valueChanges();
 }

}




