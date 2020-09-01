import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAsistenciaComponent } from './curso-asistencia.component';

describe('CursoAsistenciaComponent', () => {
  let component: CursoAsistenciaComponent;
  let fixture: ComponentFixture<CursoAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
