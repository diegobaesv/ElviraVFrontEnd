import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteTransmisionComponent } from './docente-transmision.component';

describe('DocenteTransmisionComponent', () => {
  let component: DocenteTransmisionComponent;
  let fixture: ComponentFixture<DocenteTransmisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteTransmisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteTransmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
