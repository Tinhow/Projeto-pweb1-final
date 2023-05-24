import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atividade } from '../model/Atividade';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  URL_ATIVIDADES = 'http://localhost:3000/atividades';

  constructor(private httpClient: HttpClient) {
}
  listar(): Observable<Atividade[]>{
    return this.httpClient.get<Atividade[]>(this.URL_ATIVIDADES);
  }
  cadastrar(atividade: Atividade): Observable<Atividade> {
    return this.httpClient.post<Atividade>(this.URL_ATIVIDADES, atividade);
   }
  excluir(atvARemover: Atividade): Observable<any> {
    return this.httpClient.delete(`${this.URL_ATIVIDADES}/${atvARemover.id}`);

  }
  editar(atividade: Atividade): Observable<Atividade>{
    return this.httpClient.put<Atividade>(`${this.URL_ATIVIDADES}/${atividade.id}`, atividade);

  }
  buscarId(id: number): Observable<Atividade> {
    return this.httpClient.get<Atividade>(`${this.URL_ATIVIDADES}/${id}`);
  }
}
