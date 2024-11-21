import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../../services/productos.service';
import { ProductoI } from '../../../models/productos';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  public id: number = 0;
  public form!: FormGroup;

  productosService = inject(ProductosService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0)]],
      stockMin: ['', [Validators.required, Validators.min(0)]],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      Tipoproductoid: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.params['id'];
    this.getProducto(this.id);
  }

  getProducto(id: number) {
    this.productosService.getOneproducto(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data.producto);
        },
        error: (err) => {
          console.error('Error fetching product:', err);
        }
      });
  }

  onSubmit(): void {
    const formValue: ProductoI = this.form.value;
    const id: number = this.form.value.id!;
    this.productosService.updateproducto(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('productos');
      },
      err => {
        console.error(err);
        console.log('No se ha actualizado correctamente');
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
