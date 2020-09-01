import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoTransmisionesComponent } from './apoderado-transmisiones.component';

describe('ApoderadoTransmisionesComponent', () => {
  let component: ApoderadoTransmisionesComponent;
  let fixture: ComponentFixture<ApoderadoTransmisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoderadoTransmisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoTransmisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
