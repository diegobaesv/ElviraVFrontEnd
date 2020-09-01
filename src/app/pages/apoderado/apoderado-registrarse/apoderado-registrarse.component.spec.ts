import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoRegistrarseComponent } from './apoderado-registrarse.component';

describe('ApoderadoRegistrarseComponent', () => {
  let component: ApoderadoRegistrarseComponent;
  let fixture: ComponentFixture<ApoderadoRegistrarseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoderadoRegistrarseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
