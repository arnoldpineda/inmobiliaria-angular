import { Component } from '@angular/core';
import { Alerta } from 'app/modelo/alerta';
import { QuejaDTO } from 'app/modelo/queja-dto';
import { QuejaService } from 'app/servicios/queja.service';

@Component({
  selector: 'app-crear-queja',
  templateUrl: './crear-queja.component.html',
  styleUrls: ['./crear-queja.component.css']
})
export class CrearQuejaComponent {

  queja: QuejaDTO;
  alerta!: Alerta;

  constructor(private quejaService: QuejaService) {
    this.queja = new QuejaDTO();
  }

  public crearQueja() {
    const objeto = this;
    this.quejaService.registrar(this.queja).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });
  }

  
}
