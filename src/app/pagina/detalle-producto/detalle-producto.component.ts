import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'app/servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  codigoProducto:number = 0;

  constructor(private route:ActivatedRoute, private carritoService:CarritoService){
  
    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"];
    })
  }

  public agregarCarrito(){
    this.carritoService.agregar(this.codigoProducto);
    }
}
