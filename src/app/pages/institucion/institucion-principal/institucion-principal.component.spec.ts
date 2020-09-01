import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionPrincipalComponent } from './institucion-principal.component';

describe('InstitucionPrincipalComponent', () => {
  let component: InstitucionPrincipalComponent;
  let fixture: ComponentFixture<InstitucionPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
