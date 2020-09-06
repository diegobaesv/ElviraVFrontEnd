import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTransmisionComponent } from './curso-transmision.component';

describe('CursoTransmisionComponent', () => {
  let component: CursoTransmisionComponent;
  let fixture: ComponentFixture<CursoTransmisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoTransmisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoTransmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
