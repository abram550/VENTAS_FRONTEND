import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/clientes`

  constructor(
    private http:HttpClient
  ) { }

  getAllCliente():Observable<{cliente:ClienteI[]}>{
    return this.http
      .get<{cliente:ClienteI[]}>(this.base_path)
  }

  getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
    return this.http
      .get<{cliente:ClienteI[]}>(`${this.base_path}/${id}`)
  }



  createCliente(data: any):Observable<ClienteI>{
    return this.http.post<ClienteI>(this.base_path, data)
  }

  updateCliente(id: number, data: any): Observable<ClienteI> {
    return this.http.put<ClienteI>(`${this.base_path}/${id}`, data);
  }

  deleteCliente(id: number): Observable<ClienteI> {
    return this.http.delete<ClienteI>(`${this.base_path}/${id}`);
  }

  // Método de eliminar avanzado (desactivar cliente)
  hideCliente(id: number): Observable<any> {
    return this.http.put(`${this.base_path}/hide/${id}`, { estado: false });
  }

}
