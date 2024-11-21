import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { VentasService } from '../../../services/ventas.service';
import { VentaI } from '../../../models/ventas';
import { CommonModule } from '@angular/common'; // <-- Importa CommonModule

@Component({
  selector: 'app-mostrar-ventas',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule,CommonModule],
  templateUrl: './mostrar-ventas.component.html',
  styleUrls: ['./mostrar-ventas.component.css']
})
export class MostrarVentasComponent implements OnInit {

  public ventas: VentaI[] = [];

  constructor(
    private ventasservice: VentasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarVentas();
  }

  mostrarVentas() {
    this.ventasservice.getAllVentas()
      .subscribe({
        next: (data) => {
          this.ventas = data.ventas;
        }
      });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/ventas');
    this.ventasservice.deleteVenta(id).subscribe(
      () => {
        this.mostrarVentas();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/ventas');
      }
    );
  }
}
