import { DetalleCompraDTO } from "./detalle-compra-dto";

export class CompraDTO {
    codigoUsuario: number;
    metodoPago: string;
    detalleCompraDTO:DetalleCompraDTO;

    constructor(codigoUsuario:number, metodoPago:string, detalleCompraDTO:DetalleCompraDTO){
        this.codigoUsuario = codigoUsuario;
        this.metodoPago = metodoPago;
        this.detalleCompraDTO = detalleCompraDTO;
    }
}