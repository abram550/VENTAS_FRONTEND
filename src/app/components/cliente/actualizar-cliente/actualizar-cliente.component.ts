import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteI } from '../../../models/cliente';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent implements OnInit {
  public id: number = 0;
  public form!: FormGroup;

  clienteService = inject(ClienteService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      nombreCliente: ['', [Validators.required]],
      direccionCliente: ['', [Validators.required]],
      telefonoCliente: ['', [Validators.required]],
      correoCliente: ['', [Validators.required, Validators.email]],
      passwordCliente: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.params['id'];
    this.getCliente(this.id);
  }

  getCliente(id: number) {
    this.clienteService.getOneCliente(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data.cliente);
        }
      });
  }

  onSubmit(): void {
    const formValue: ClienteI = this.form.value;
    const id: number = this.form.value.id!;
    this.clienteService.updateCliente(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('clientes');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/clientes');
  }

  get nombreCliente() { return this.form.get('nombreCliente'); }
  get direccionCliente() { return this.form.get('direccionCliente'); }
  get telefonoCliente() { return this.form.get('telefonoCliente'); }
  get correoCliente() { return this.form.get('correoCliente'); }
  get passwordCliente() { return this.form.get('passwordCliente'); }
}
