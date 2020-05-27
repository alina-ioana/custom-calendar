import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = '/api';

  constructor(
    private http: HttpClient,
  ) {
  }

  get(path: string, params = {}): Observable<any> {
    return this.http.get(`${this.API_URL}${path}`, {params: params});
  }

  put(path: string, body = {}): Observable<any> {
    return this.http.put(`${this.API_URL}${path}`, body);
  }

  post(path: string, body = {}, params = {}): Observable<any> {
    return this.http.post(`${this.API_URL}${path}`, body, {params: params});
  }

  delete(path): Observable<any> {
    return this.http.delete(`${this.API_URL}${path}`, {});
  }

}
