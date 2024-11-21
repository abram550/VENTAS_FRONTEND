import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAvanzadoTipoProductoComponent } from './eliminar-avanzado-tipo-producto.component';

describe('EliminarAvanzadoTipoProductoComponent', () => {
  let component: EliminarAvanzadoTipoProductoComponent;
  let fixture: ComponentFixture<EliminarAvanzadoTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarAvanzadoTipoProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAvanzadoTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
