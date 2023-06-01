import { Component } from '@angular/core';
import { QuejaGetDTO } from 'app/modelo/queja-get-dto';
import { QuejaService } from 'app/servicios/queja.service';

@Component({
  selector: 'app-listar-quejas',
  templateUrl: './listar-quejas.component.html',
  styleUrls: ['./listar-quejas.component.css']
})
export class ListarQuejasComponent {

  quejas:QuejaGetDTO[];

  constructor(private quejaService: QuejaService){
    this.quejas = [];
  }

  ngOnInit(): void {

    this.quejaService.listar(1).subscribe({
      
      next: data => {
        this.quejas = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
