import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from 'app/modelo/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productoURL = "http://localhost:8080/api/producto";

  constructor(private http:HttpClient) { }

  public listaProductos():Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.productoURL}/listar_disponibles`);
  }

  public listar_mis_productos(codigo: number):Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.productoURL}/listar_mis_productos/${codigo}`);
  }
}

