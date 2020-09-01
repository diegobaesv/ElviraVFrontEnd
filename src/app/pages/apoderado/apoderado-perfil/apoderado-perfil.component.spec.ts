import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoPerfilComponent } from './apoderado-perfil.component';

describe('ApoderadoPerfilComponent', () => {
  let component: ApoderadoPerfilComponent;
  let fixture: ComponentFixture<ApoderadoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoderadoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
