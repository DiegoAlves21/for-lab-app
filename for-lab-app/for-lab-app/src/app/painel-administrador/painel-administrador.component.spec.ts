import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAdministradorComponent } from './painel-administrador.component';

describe('PainelAdministradorComponent', () => {
  let component: PainelAdministradorComponent;
  let fixture: ComponentFixture<PainelAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
