import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';
import { ProductoI } from '../../../models/productos';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  public form: FormGroup;

  productosService = inject(ProductosService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(1)]],
      stockMin: ['', [Validators.required, Validators.min(0)]],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      Tipoproductoid: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: ProductoI = this.form.value;
    console.log(formValue);
    this.productosService.createproducto(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('productos');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/productos');
  }

  get nombre() { return this.form.get('nombre'); }
  get marca() { return this.form.get('marca'); }
  get precio() { return this.form.get('precio'); }
  get stockMin() { return this.form.get('stockMin'); }
  get cantidad() { return this.form.get('cantidad'); }
  get Tipoproductoid() { return this.form.get('Tipoproductoid'); }
}
