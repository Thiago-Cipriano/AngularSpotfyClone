/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PainelEsquerdoComponent } from './painelEsquerdo.component';

describe('PainelEsquerdoComponent', () => {
  let component: PainelEsquerdoComponent;
  let fixture: ComponentFixture<PainelEsquerdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelEsquerdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
