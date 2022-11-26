import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persone } from './persone';

@Injectable({
  providedIn: 'root'
})
export class PersoneService {
  private baseURL = "http://localhost:8080/api/v0/Persone";
  constructor(private httpClient: HttpClient) { }
  getPersoneList(): Observable<Persone[]> {
    return this.httpClient.get<Persone[]>(`${this.baseURL}`);
  }

  createPersone(persone: Persone): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, persone);
  }

  getPersoneById(id: number): Observable<Persone> {
    return this.httpClient.get<Persone>(`${this.baseURL}/${id}`);
  }

  updatePersone(id: number, persone: Persone): Observable<object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, persone)
  }
  deletePersone(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getPesoneDetails(id: number): Observable<Persone> {
    return this.httpClient.get<Persone>(`${this.baseURL}/${id}`)
  }
}
