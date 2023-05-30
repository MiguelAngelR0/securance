import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPolizasComponent } from './buscador-polizas.component';

describe('BuscadorPolizasComponent', () => {
  let component: BuscadorPolizasComponent;
  let fixture: ComponentFixture<BuscadorPolizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorPolizasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
