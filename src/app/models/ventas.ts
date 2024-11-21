export interface VentaI {
    id?: number;
    fechaVenta: string;
    subtotal: number;
    impuestos: number;
    descuentos: number;
    total: number;
    clientes_id: number;
}