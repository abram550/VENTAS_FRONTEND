import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TipoproductosService } from '../../../services/tipoproductos.service';
import { TipoProductoI } from '../../../models/tipoproductos';

@Component({
  selector: 'app-mostrar-tipo-productos',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-tipo-productos.component.html',
  styleUrl: './mostrar-tipo-productos.component.css'
})
export class MostrarTipoProductosComponent implements OnInit {

  public tipoproductos: TipoProductoI[] = [];

  constructor(
    private tipoproductosservice: TipoproductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrartipoproductos();
  }

  mostrartipoproductos() {
    this.tipoproductosservice.getAlltipoproductos()
      .subscribe({
        next: (data) => {
          this.tipoproductos = data.tiposProducto;
        }
      });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/clientes');
    this.tipoproductosservice.deletetipoproductos(id).subscribe(
      () => {
        this.mostrartipoproductos();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/clientes');
      }
    );
  }
}
