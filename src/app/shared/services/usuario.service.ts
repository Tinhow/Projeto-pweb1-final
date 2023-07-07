import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { of , defer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://localhost:8080/usuarios';
  //URL_USUARIOS = 'http://localhost:3000/usuarios';

  botaoSalvar = 'Salvar'

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    if (!usuario || !usuario.cpf) {
      return defer(() => {
        throw new Error('Por favor, forneça um CPF válido.');
      });
    }
    return this.listar().pipe(
      map((usuarios: Usuario[]) => {
        const cpfExists = usuarios.some(u => u.cpf === usuario.cpf);
        if (cpfExists) {
          throw new Error('CPF já cadastrado.');
        }
        return usuario;
      }),
      catchError((error: any) => {
        throw error;
      }),
      switchMap((usuario: Usuario) => {
        return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
      })
    );
  }




  excluir(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(`${this.URL_USUARIOS}/${id}`)
  }

  editar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }

  bucarId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  logar(usuario: Usuario): Observable<Usuario> {
    return this.listar().pipe(
      map((usuarios: Usuario[]) => {
        const usuarioEncontrado = usuarios.find(u => u.email === usuario.email && u.senha === usuario.senha);
        if (usuarioEncontrado) {
          return usuarioEncontrado;
        } else {
          throw new Error('Usuário não encontrado');
        }
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getUsuarioByCPF(cpf: string): Observable<Usuario> {
    const url = `${this.URL_USUARIOS}?cpf=${cpf}`;
    return this.httpClient.get<Usuario>(url);
  }

}












