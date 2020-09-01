import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoEstudiantesComponent } from './apoderado-estudiantes.component';

describe('ApoderadoEstudiantesComponent', () => {
  let component: ApoderadoEstudiantesComponent;
  let fixture: ComponentFixture<ApoderadoEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoderadoEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
