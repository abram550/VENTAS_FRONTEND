import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoproductosService } from '../../../services/tipoproductos.service';
import { TipoProductoI } from '../../../models/tipoproductos';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-actualizar-tipoproducto',
  standalone: true,
  imports: [CheckboxModule,CommonModule, ReactiveFormsModule, CardModule, ButtonModule,],
  templateUrl: './actualizar-tipo-producto.component.html',
  styleUrl: './actualizar-tipo-producto.component.css'
})
export class ActualizarTipoProductoComponent implements OnInit {
  public id: number = 0;
  public form!: FormGroup;

  tipoproductosService = inject(TipoproductosService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      estado: [false, [Validators.required]],
    });

    this.id = this.route.snapshot.params['id'];
    this.getTipoproducto(this.id);
  }

  getTipoproducto(id: number) {
    this.tipoproductosService.getOnetipoproductos(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data.tipoProducto);
        }
      });
  }

  onSubmit(): void {
    const formValue: TipoProductoI = this.form.value;
    const id: number = this.form.value.id!;
    this.tipoproductosService.updatetipoproductos(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('tipoproductos');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/tipoproductos');
  }

  get name() { return this.form.get('name'); }
  get estado() { return this.form.get('estado'); }
}
