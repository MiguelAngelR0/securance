import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureIconsComponent } from './secure-icons.component';

describe('SecureIconsComponent', () => {
  let component: SecureIconsComponent;
  let fixture: ComponentFixture<SecureIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
