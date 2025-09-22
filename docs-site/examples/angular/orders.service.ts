import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private http: HttpClient) {}
  create(payload: any): Observable<any> {
    return this.http.post('/api/orders', payload);
  }
  getById(id: number): Observable<any> {
    return this.http.get(`/api/orders/${id}`);
  }
}