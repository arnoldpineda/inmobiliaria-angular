import { Component } from '@angular/core';
import { DetalleCompraDTO } from 'app/modelo/detalle-compra-dto';
import { ProductoDTO } from 'app/modelo/producto-dto';
import { CarritoService } from 'app/servicios/carrito.service';
import { ProductoService } from 'app/servicios/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: ProductoDTO[];
  valorTotal: number;

  constructor(private carritoService:CarritoService, private productoService:ProductoService) {
    this.productos = [];
    this.valorTotal = 0;
    const listaCodigos = this.carritoService.listar();
    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        const producto = this.productoService.obtener(cod);
        if (producto != null) {
          this.productos.push();
          this.valorTotal += producto.precio;
        }
      }
    }
  }
}
