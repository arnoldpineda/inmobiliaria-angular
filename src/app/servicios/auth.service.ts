import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from 'app/modelo/mensaje-dto';
import { SesionDTO } from 'app/modelo/sesion-dto';
import { UsuarioDTO } from 'app/modelo/usuario-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "https://unimarket-uq-prod.up.railway.app/api/auth";

  constructor(private http:HttpClient) { }

  public registrar(usuario:UsuarioDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/crear_cliente`, usuario);
  }

  public login(loginUser:SesionDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginUser);
  }

}
