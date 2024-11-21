import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAvanzadoProductoComponent } from './eliminar-avanzado-producto.component';

describe('EliminarAvanzadoProductoComponent', () => {
  let component: EliminarAvanzadoProductoComponent;
  let fixture: ComponentFixture<EliminarAvanzadoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarAvanzadoProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAvanzadoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
