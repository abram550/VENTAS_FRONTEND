import { Component, OnInit } from '@angular/core';
import { ClienteI } from '../../../models/cliente';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ClienteService } from '../../../services/cliente.service'

@Component({
  selector: 'app-mostrar-cliente',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-cliente.component.html',
  styleUrl: './mostrar-cliente.component.css'
})
export class MostrarClienteComponent implements OnInit{
  public clientes:ClienteI[] = []
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.clienteService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
          // console.log(this.clientes)
        }
      })
  }


  eliminar(id: number): void{
    this.router.navigateByUrl('/clientes');
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
        this.mostrarClientes();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/clientes');

      }
    );
  }
  
  eliminarAvanzado(id: number) {
    this.clienteService.hideCliente(id).subscribe(
        response => {
            console.log('Cliente desactivado:', response);
            // Lógica adicional como actualización de la vista o notificaciones
        },
        error => {
            console.error('Error al desactivar el cliente:', error);
        }
    );
}


}
