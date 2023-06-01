import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from 'app/modelo/mensaje-dto';
import { UsuarioDTO } from 'app/modelo/usuario-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userUrl = "https://unimarket-uq-prod.up.railway.app/api/usuarios";
  
  constructor(private http: HttpClient) { }
  
  public obtener(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener/${codigo}`);
  }
  
  public eliminar(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }

  public actualizar(codigo: number, usuario: UsuarioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar/${codigo}`, usuario);
  }

  public agregar_favorito(codigoUsuario: number, codigoProducto: number): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/agregar_favorito/${codigoUsuario}/${codigoProducto}`, null);
  }

  public listar_favorito(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar_favorito/${codigo}`);
  }

  public eliminar_favorito(codigoUsuario: number, codigoProducto: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar_favorito/${codigoUsuario}/${codigoProducto}`);
  }
}