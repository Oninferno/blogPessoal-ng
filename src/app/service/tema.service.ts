import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://oninferno.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://oninferno.herokuapp.com/tema/${id}`, this.token)
  }

  getByNome(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://oninferno.herokuapp.com/tema/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://oninferno.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>("https://oninferno.herokuapp.com/tema", tema, this.token)
  }

  //para receber o parâmetro dentro do .delete é preciso abrir CRASE e não chaves como no Java
  deleteTema(id: number) {
    return this.http.delete(`https://oninferno.herokuapp.com/tema/${id}`, this.token)
  }

}
