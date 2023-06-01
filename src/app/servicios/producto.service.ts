import { ProductoDTO } from "app/modelo/producto-dto";
import { ProductoGetDTO } from "../modelo/producto-get-dto";

export class ProductoService {
  productos: ProductoGetDTO[];

  constructor() {
    this.productos = [];
    const producto1 = new ProductoGetDTO();
    producto1.codigo = 1;
    producto1.nombre = "Blusa";
    producto1.descripcion = "color rojo";
    producto1.precio = 53000;
    producto1.unidades = 10;
    producto1.imagenes = ["https://res.cloudinary.com/dsr8wu5yn/image/upload/c_scale,h_200,w_200/v1685320502/co/edu/uniquindio/unimarket/unimarket/udk5e6ngnj21ecbsmmmg.webp", "https://picsum.photos/450/225"];
    producto1.categoria = ["MODA"];
    this.productos.push(producto1);

    const producto2 = new ProductoGetDTO();
    producto2.codigo = 2;
    producto2.nombre = "rascador";
    producto2.descripcion = "material: Carton";
    producto2.precio = 25000;
    producto2.unidades = 15;
    producto2.imagenes = ["https://res.cloudinary.com/dsr8wu5yn/image/upload/c_scale,h_200,w_200/v1685320275/co/edu/uniquindio/unimarket/unimarket/D_NQ_NP_2X_936218-MCO52249072393_112022-F_gkmpex.webp"];
    producto2.categoria = ["MASCOTAS"];
    this.productos.push(producto2);

    // Agrega otros productos

  }

  public listar(): ProductoGetDTO[] {
    return this.productos;
  }

  public obtener(codigo:number):ProductoGetDTO | undefined{
    return this.productos.find(p => p.codigo == codigo);
  }
  
  public crear(producto:ProductoDTO){

  }


  //actualizar
  public actualizar(producto:ProductoDTO){
    return this.productos;
  }
}