import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from '../../../services/ventas.service';
import { VentaI } from '../../../models/ventas';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-venta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-venta.component.html',
  styleUrls: ['./actualizar-venta.component.css']
})
export class ActualizarVentaComponent implements OnInit {
  public id: number = 0;
  public form!: FormGroup;

  ventasService = inject(VentasService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      fechaVenta: ['', [Validators.required]],
      subtotal: ['', [Validators.required]],
      impuestos: ['', [Validators.required]],
      descuentos: ['', [Validators.required]],
      total: ['', [Validators.required]],
      clientes_id: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.params['id'];
    this.getVenta(this.id);
  }

  getVenta(id: number) {
    this.ventasService.getOneVenta(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data.venta);
        },
        error: (err) => {
          console.error('Error fetching venta:', err);
        }
      });
  }

  onSubmit(): void {
    const formValue: VentaI = this.form.value;
    const id: number = this.form.value.id!;
    this.ventasService.updateVenta(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('ventas');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/ventas');
  }

  get fechaVenta() { return this.form.get('fechaVenta'); }
  get subtotal() { return this.form.get('subtotal'); }
  get impuestos() { return this.form.get('impuestos'); }
  get descuentos() { return this.form.get('descuentos'); }
  get total() { return this.form.get('total'); }
  get clientes_id() { return this.form.get('clientes_id'); }
}
