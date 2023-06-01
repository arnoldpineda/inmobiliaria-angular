import { DetalleCompraDTO } from "./detalle-compra-dto";

export class CompraGetDTO {
    codigo: number;
    fecha: any;
    valorTotal: number;
    codigoUsuario: number;
    metodoPago: string;
    detalleCompraDTO:DetalleCompraDTO[] = [];

    constructor(codigo:number, fecha:any, valorTotal:number, codigoUsuario:number, metodoPago:string, detalleCompraDTO:DetalleCompraDTO){
        this.codigo = codigo;
        this.fecha = fecha;
        this.valorTotal = valorTotal;
        this.codigoUsuario = codigoUsuario;
        this.metodoPago = metodoPago;

    }
}