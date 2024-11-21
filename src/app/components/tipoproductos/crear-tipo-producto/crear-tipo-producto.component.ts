import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoproductosService } from '../../../services/tipoproductos.service';
import { Router } from '@angular/router';
import { TipoProductoI } from '../../../models/tipoproductos';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-crear-tipo-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule,CheckboxModule],
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css'] // Asegúrate de usar 'styleUrls'
})
export class CrearTipoProductoComponent implements OnInit {

  public form: FormGroup; // Declaración del formulario

  tipoProductoService = inject(TipoproductosService); // Inyectamos el servicio
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // Inicialización del formulario
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]], // Campo de nombre del tipo de producto
      estado: [false, [Validators.required]], // Estado como booleano, inicialmente falso
    });
  }

  ngOnInit(): void { }

  // Manejo del envío del formulario
  onSubmit(): void {
    const formValue: TipoProductoI = this.form.value;
    console.log(formValue);
    this.tipoProductoService.createtipoproductos(formValue).subscribe(
      () => {
        console.log('Tipo de Producto creado:', formValue);
        this.router.navigateByUrl('tipoproductos'); // Navegación a la lista de tipos de producto
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente el Tipo de Producto');
      }
    );
  }

  // Cancelar y volver a la lista de tipos de producto
  cancel() {
    this.router.navigateByUrl('/tipoproductos');
  }

  // Métodos para acceder a los controles de formulario de forma más fácil
  get name() { return this.form.get('name'); }
  get estado() { return this.form.get('estado'); }
}
