import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoConductaComponent } from './curso-conducta.component';

describe('CursoConductaComponent', () => {
  let component: CursoConductaComponent;
  let fixture: ComponentFixture<CursoConductaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoConductaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoConductaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
