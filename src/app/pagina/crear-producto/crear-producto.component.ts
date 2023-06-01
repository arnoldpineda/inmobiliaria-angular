import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'app/modelo/producto-dto';
import { ProductoGetDTO } from 'app/modelo/producto-get-dto';
import { ProductoService } from 'app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  
  categorias:string[];
  producto:ProductoDTO;
  
  archivos!:FileList;
  esEdicion:boolean = false;
  codigoProducto:number;
  
  constructor(private route:ActivatedRoute, private productoServicio:ProductoService){
  this.categorias = [];
  this.cargarCategorias();
  this.producto = new ProductoDTO;
  this.codigoProducto = 0;
  
  this.route.params.subscribe(params => {
    this.codigoProducto = params["codigo"];
    let objetoProducto = this.productoServicio.obtener(this.codigoProducto);
    if(objetoProducto != null){
      
    this.producto = objetoProducto;
    this.esEdicion = true;
    }
  });

  }

  private cargarCategorias(){
    this.categorias.push('MODA');
    this.categorias.push('DEPORTES');
    this.categorias.push('MASCOTAS');
    this.categorias.push('JUEGOS');
    this.categorias.push('MUSICA');
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
    this.archivos = event.target.files;
    }
  }

  public crearProducto(){
    if(this.archivos != null && this.archivos.length > 0){
      this.productoServicio.crear(this.producto);
    }else{
    console.log('Debe seleccionar al menos una imagen');
    }
  }
}
