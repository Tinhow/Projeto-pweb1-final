import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection,  DocumentData} from '@angular/fire/compat/firestore';
import {catchError, map} from 'rxjs/operators';
import { Usuario } from '../model/Usuario';



@Injectable({
 providedIn: 'root'
})
export class UsuarioFirestoreService {


//  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
//  NOME_COLECAO = 'users';


//  constructor(private afs: AngularFirestore) {
//    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
//  }


//  listar(): Observable<Usuario[]> {
//    return this.colecaoUsuarios.valueChanges({idField: 'id'});
//  }

//   inserir(usuario: Usuario): Observable<Usuario> {
//     delete usuario.id;
//     const usuarioInserido = Object.assign({}, usuario);
//     return from(this.colecaoUsuarios.add(usuarioInserido)).pipe(
//       map((docRef) => {
//         usuario.id = docRef.id;
//         return usuario;
//       })
//     );
//   }

//  apagar(id: string): Observable<void> {
//    return from(this.colecaoUsuarios.doc(id).delete());
//  }

//  pesquisarPorId(id: string): Observable<Usuario> {
//   // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
//   //  para o tipo usuário
//   return this.colecaoUsuarios.doc(id).get().pipe(map(document => new Usuario(document.id, document.data())));
// }

// atualizar(usuario: Usuario): Observable<void> {
//   const id = usuario.id;
//   const usuarioAtualizado = { ...usuario }; // Faz uma cópia do objeto usuario
//   delete usuarioAtualizado.id;

//   return from(this.colecaoUsuarios.doc(id).update(usuarioAtualizado as DocumentData));
// }



// listarMaioresDeIdade(): Observable<Usuario[]> {
//   let usuariosMaioresIdade: AngularFirestoreCollection<Usuario>;
//   usuariosMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
//   return usuariosMaioresIdade.valueChanges();
// }

// logar(usuario: Usuario): Observable<Usuario> {
//   return this.listar().pipe(
//     map((usuarios: Usuario[]) => {
//       const usuarioEncontrado = usuarios.find(u => u.email === usuario.email && u.senha === usuario.senha);
//       if (usuarioEncontrado) {
//         return usuarioEncontrado;
//       } else {
//         throw new Error('Usuário não encontrado');
//       }
//     }),
//     catchError((error: any) => {
//       throw error;
//     })
//   );
// }

}






