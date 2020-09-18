import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../modules/game';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  URL = "http://localhost:4000"

  constructor(private http: HttpClient) { }
  
  getAll() : Observable<Game[]>{
    return this.http.get<Game[]>(`${this.URL}/api/game`);
  }

  get(id : number) : Observable<Game>{
    return this.http.get<Game>(this.URL+"/api/game/"+id);
  }
  
}
