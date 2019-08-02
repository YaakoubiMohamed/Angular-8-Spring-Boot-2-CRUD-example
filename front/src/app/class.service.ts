import { Injectable } from '@angular/core';
import { Class } from './class';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private baseUrl = 'http://localhost:8080/api/classes';
  private createUrl = 'http://localhost:8080/api/classe';

  constructor(private http: HttpClient) { }

  

  getClass(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createClass(Class: Object): Observable<Object> {
    return this.http.post(`${this.createUrl}`, Class);
  }

  updateClass(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteClass(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  
  getClasssList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
}