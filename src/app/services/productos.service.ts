import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/producto`;

  constructor(
    private http: HttpClient
  ) { }

  getAllproductos(): Observable<{ productos: ProductoI[] }> {
    return this.http
      .get<{ productos: ProductoI[] }>(this.base_path);
  }

  getOneproducto(id: number): Observable<{ producto: ProductoI[] }> {
    return this.http
      .get<{ producto: ProductoI[] }>(`${this.base_path}/${id}`);
  }

  createproducto(data: any): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.base_path, data);
  }

  updateproducto(id: number, data: any): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.base_path}/${id}`, data);
  }

  deleteproducto(id: number): Observable<ProductoI> {
    return this.http.delete<ProductoI>(`${this.base_path}/${id}`);
  }
}
