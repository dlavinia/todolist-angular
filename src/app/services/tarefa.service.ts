import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = 'http://localhost:3000/tarefas/';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url);
  }

  getTarefa(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(this.url + id + '/');
  }

  adicionarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.url, tarefa);
  }
  
  atualizarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(this.url + tarefa.id, tarefa);
  }
  
  deletarTarefa(id: number): Observable<Tarefa> {
    return this.http.delete<Tarefa>(this.url + id + '/');
  }
}