/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopArtistaComponent } from './top-artista.component';

describe('TopArtistaComponent', () => {
  let component: TopArtistaComponent;
  let fixture: ComponentFixture<TopArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
