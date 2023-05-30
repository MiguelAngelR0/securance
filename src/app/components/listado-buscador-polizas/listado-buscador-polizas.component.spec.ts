import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBuscadorPolizasComponent } from './listado-buscador-polizas.component';

describe('ListadoBuscadorPolizasComponent', () => {
  let component: ListadoBuscadorPolizasComponent;
  let fixture: ComponentFixture<ListadoBuscadorPolizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoBuscadorPolizasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoBuscadorPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
