import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTipoProductosComponent } from './mostrar-tipo-productos.component';

describe('MostrarTipoProductosComponent', () => {
  let component: MostrarTipoProductosComponent;
  let fixture: ComponentFixture<MostrarTipoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarTipoProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTipoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
