import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantePerfilComponent } from './estudiante-perfil.component';

describe('EstudiantePerfilComponent', () => {
  let component: EstudiantePerfilComponent;
  let fixture: ComponentFixture<EstudiantePerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantePerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
