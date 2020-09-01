import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteHorarioComponent } from './estudiante-horario.component';

describe('EstudianteHorarioComponent', () => {
  let component: EstudianteHorarioComponent;
  let fixture: ComponentFixture<EstudianteHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
