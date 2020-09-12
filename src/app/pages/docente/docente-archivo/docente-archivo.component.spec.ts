import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteArchivoComponent } from './docente-archivo.component';

describe('DocenteArchivoComponent', () => {
  let component: DocenteArchivoComponent;
  let fixture: ComponentFixture<DocenteArchivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteArchivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
