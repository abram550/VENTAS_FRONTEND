import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAvanzadoVentaComponent } from './eliminar-avanzado-venta.component';

describe('EliminarAvanzadoVentaComponent', () => {
  let component: EliminarAvanzadoVentaComponent;
  let fixture: ComponentFixture<EliminarAvanzadoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarAvanzadoVentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAvanzadoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
