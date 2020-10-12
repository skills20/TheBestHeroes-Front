import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebHeroesService {

  bestHero: any;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json' })
  };
  constructor(private http: HttpClient) { }

  getHero(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/theBestHero`);
  }
  getHeroes(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/allHeroes`);
  }
  getOneHero(id: string): Observable<any> {
    let params1 = new HttpParams().set('heroid', id)
    return this.http.get<any>(`http://localhost:3000/oneHero`, { params: params1 });
  }
}
