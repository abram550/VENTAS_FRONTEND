import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasService } from '../../../services/ventas.service'; // Ruta hacia el servicio de ventas
import { Router } from '@angular/router';
import { VentaI } from '../../../models/ventas'; // Ruta hacia el modelo de ventas
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-venta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {

  public form: FormGroup;

  ventasService = inject(VentasService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      fechaVenta: ['', [Validators.required]],
      subtotal: ['', [Validators.required]],
      impuestos: ['', [Validators.required]],
      descuentos: ['', [Validators.required]],
      total: ['', [Validators.required]],
      clientes_id: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: VentaI = this.form.value;
    console.log(formValue);
    this.ventasService.createVenta(formValue).subscribe(
      () => {
        console.log('Venta creada exitosamente');
        this.router.navigateByUrl('ventas');
      },
      err => {
        console.log(err);
        console.log('Error al crear la venta');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/ventas');
  }

  // Getters para facilitar el acceso a los controles del formulario
  get fechaVenta() { return this.form.get('fechaVenta'); }
  get subtotal() { return this.form.get('subtotal'); }
  get impuestos() { return this.form.get('impuestos'); }
  get descuentos() { return this.form.get('descuentos'); }
  get total() { return this.form.get('total'); }
  get clientes_id() { return this.form.get('clientes_id'); }
}
