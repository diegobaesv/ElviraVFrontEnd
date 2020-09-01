import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionGaleriaComponent } from './institucion-galeria.component';

describe('InstitucionGaleriaComponent', () => {
  let component: InstitucionGaleriaComponent;
  let fixture: ComponentFixture<InstitucionGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
