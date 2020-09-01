import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionInformacionComponent } from './institucion-informacion.component';

describe('InstitucionInformacionComponent', () => {
  let component: InstitucionInformacionComponent;
  let fixture: ComponentFixture<InstitucionInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
