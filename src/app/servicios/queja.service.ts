import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from 'app/modelo/mensaje-dto';
import { QuejaDTO } from 'app/modelo/queja-dto';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  private quejaURL = "http://localhost:8080/api/queja";

  constructor(private http:HttpClient) { }

  public registrar(queja:QuejaDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.quejaURL}/crear_queja`, queja);
  }

  public listar(codigo: number):Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.quejaURL}/lista_quejas/${codigo}`);
  }

  public buscarRadicado(radicado: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.quejaURL}/buscar_radicado/${radicado}`);
  }

}
