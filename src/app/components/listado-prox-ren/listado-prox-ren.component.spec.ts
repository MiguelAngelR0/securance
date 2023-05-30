import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProxRenComponent } from './listado-prox-ren.component';

describe('ListadoProxRenComponent', () => {
  let component: ListadoProxRenComponent;
  let fixture: ComponentFixture<ListadoProxRenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoProxRenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoProxRenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
