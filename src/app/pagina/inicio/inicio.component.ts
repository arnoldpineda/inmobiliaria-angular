import { Component } from '@angular/core';
import { ProductoGetDTO } from 'app/modelo/producto-get-dto';
import { ProductService } from 'app/servicios/product.service';
import { ProductoService } from 'app/servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  productos:ProductoGetDTO[];

  constructor(private productServicio:ProductService){
    this.productos = [];   
  }


  ngOnInit(): void {

    this.productServicio.listaProductos().subscribe({
      
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
