import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProductoI } from '../models/tipoproductos';

@Injectable({
  providedIn: 'root'
})
export class TipoproductosService {
    api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/tipoproductos`

  constructor(
    private http:HttpClient
  ) { }

  getAlltipoproductos():Observable<{tiposProducto:TipoProductoI[]}>{
    return this.http
      .get<{tiposProducto:TipoProductoI[]}>(this.base_path)
  }

  getOnetipoproductos(id: number):Observable<{tipoProducto:TipoProductoI[]}>{
    return this.http
      .get<{tipoProducto:TipoProductoI[]}>(`${this.base_path}/${id}`)
  }



  createtipoproductos(data: any):Observable<TipoProductoI>{
    return this.http.post<TipoProductoI>(this.base_path, data)
  }

  updatetipoproductos(id: number, data: any): Observable<TipoProductoI> {
    return this.http.put<TipoProductoI>(`${this.base_path}/${id}`, data);
  }

  deletetipoproductos(id: number): Observable<TipoProductoI> {
    return this.http.delete<TipoProductoI>(`${this.base_path}/${id}`);
  }
}
