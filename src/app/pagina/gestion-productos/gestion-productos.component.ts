import { Component, OnInit } from '@angular/core';
import { ProductoGetDTO } from 'app/modelo/producto-get-dto';
import { ProductService } from 'app/servicios/product.service';
import { ProductoService } from 'app/servicios/producto.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit{

  productos:ProductoGetDTO[];
  seleccionados:ProductoGetDTO[];
  textoBtnEliminar:string;

  constructor(private productServicio:ProductService, private productoServicio:ProductoService){
  this.productos = [];
  this.seleccionados = [];
  this.textoBtnEliminar = "";
  }

  // ngOnInit(): void {
  //   this.productos = this.productoServicio.listar();
  // }

  ngOnInit(): void {

    this.productServicio.listar_mis_productos(1).subscribe({
      
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public seleccionar(producto:ProductoGetDTO, estado:boolean){
    if(estado){
      this.seleccionados.push(producto);
    }else{
      this.seleccionados = this.seleccionados.filter((i: ProductoGetDTO) => i != producto);
    }
    this.actualizarMensaje();
  }

  private actualizarMensaje(){
    const tam = this.seleccionados.length;
    if(tam != 0){
      if(tam == 1){
      this.textoBtnEliminar = "1 elemento";
      }else{
      this.textoBtnEliminar = tam+" elementos";
      }
    }else{
    this.textoBtnEliminar = "";
    }
  }

  public borrarProductos(){
    this.seleccionados.forEach((e: ProductoGetDTO) => {
      this.productos = this.productos.filter(i => i != e);
    });
    
    this.seleccionados = [];
    this.actualizarMensaje();
  }
}
