import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetalleComponent } from './pagina-detalle.component';

describe('PaginaDetalleComponent', () => {
  let component: PaginaDetalleComponent;
  let fixture: ComponentFixture<PaginaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
