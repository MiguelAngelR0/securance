import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePolizaPageComponent } from './detalle-poliza-page.component';

describe('DetallePolizaPageComponent', () => {
  let component: DetallePolizaPageComponent;
  let fixture: ComponentFixture<DetallePolizaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePolizaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePolizaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
