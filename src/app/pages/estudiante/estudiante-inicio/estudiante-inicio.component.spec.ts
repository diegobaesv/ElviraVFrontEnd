import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteInicioComponent } from './estudiante-inicio.component';

describe('EstudianteInicioComponent', () => {
  let component: EstudianteInicioComponent;
  let fixture: ComponentFixture<EstudianteInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
