import { Routes } from '@angular/router';

// Clientes
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';

// Ventas
import { MostrarVentasComponent } from './components/ventas/mostrar-ventas/mostrar-ventas.component';
import { CrearVentaComponent } from './components/ventas/crear-venta/crear-venta.component';
import { ActualizarVentaComponent } from './components/ventas/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './components/ventas/eliminar-venta/eliminar-venta.component';
import { EliminarAvanzadoVentaComponent } from './components/ventas/eliminar-avanzado-venta/eliminar-avanzado-venta.component';

// Productos
import { MostrarProductosComponent } from './components/productos/mostrar-productos/mostrar-productos.component';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/productos/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/productos/eliminar-producto/eliminar-producto.component';
import { EliminarAvanzadoProductoComponent } from './components/productos/eliminar-avanzado-producto/eliminar-avanzado-producto.component';

// Tipos de Productos
import { MostrarTipoProductosComponent } from './components/tipoproductos/mostrar-tipo-productos/mostrar-tipo-productos.component';
import { CrearTipoProductoComponent } from './components/tipoproductos/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipoproductos/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { EliminarTipoProductoComponent } from './components/tipoproductos/eliminar-tipo-producto/eliminar-tipo-producto.component';
import { EliminarAvanzadoTipoProductoComponent } from './components/tipoproductos/eliminar-avanzado-tipo-producto/eliminar-avanzado-tipo-producto.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    // Rutas de Clientes
    {
        path: "clientes",
        component: MostrarClienteComponent
    },
    {
        path: "clientes/nuevo",
        component: CrearClienteComponent
    },
    {
        path: "clientes/edit/:id",
        component: ActualizarClienteComponent
    },
    // Rutas de Ventas
    {
        path: "ventas",
        component: MostrarVentasComponent
    },
    {
        path: "ventas/nuevo",
        component: CrearVentaComponent
    },
    {
        path: "ventas/edit/:id",
        component: ActualizarVentaComponent
    },
    {
        path: "ventas/eliminar/:id",
        component: EliminarVentaComponent
    },
    {
        path: "ventas/eliminar-avanzado/:id",
        component: EliminarAvanzadoVentaComponent
    },
    // Rutas de Productos
    {
        path: "productos",
        component: MostrarProductosComponent
    },
    {
        path: "productos/nuevo",
        component: CrearProductoComponent
    },
    {
        path: "productos/edit/:id",
        component: ActualizarProductoComponent
    },
    {
        path: "productos/eliminar/:id",
        component: EliminarProductoComponent
    },
    {
        path: "productos/eliminar-avanzado/:id",
        component: EliminarAvanzadoProductoComponent
    },
    // Rutas de Tipos de Productos
    {
        path: "tipoproductos",
        component: MostrarTipoProductosComponent
    },
    {
        path: "tipoproductos/nuevo",
        component: CrearTipoProductoComponent
    },
    {
        path: "tipoproductos/edit/:id",
        component: ActualizarTipoProductoComponent
    },
    {
        path: "tipoproductos/eliminar/:id",
        component: EliminarTipoProductoComponent
    },
    {
        path: "tipoproductos/eliminar-avanzado/:id",
        component: EliminarAvanzadoTipoProductoComponent
    },
];
