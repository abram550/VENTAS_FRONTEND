import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProductosService } from '../../../services/productos.service';
import { ProductoI } from '../../../models/productos';

@Component({
  selector: 'app-mostrar-productos',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-productos.component.html',
  styleUrl: './mostrar-productos.component.css'
})
export class MostrarProductosComponent implements OnInit {

  public producto: ProductoI[] = [];

  constructor(
    private productosservice: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarProductos();
  }

  mostrarProductos() {
    this.productosservice.getAllproductos()
      .subscribe({
        next: (data) => {
          this.producto = data.productos;
        }
      });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/producto');
    this.productosservice.deleteproducto(id).subscribe(
      () => {
        this.mostrarProductos();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/producto');
      }
    );
  }
}
