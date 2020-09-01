import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoInicioComponent } from './apoderado-inicio.component';

describe('ApoderadoInicioComponent', () => {
  let component: ApoderadoInicioComponent;
  let fixture: ComponentFixture<ApoderadoInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoderadoInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
