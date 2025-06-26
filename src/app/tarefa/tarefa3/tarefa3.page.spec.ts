import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarefa3Page } from './tarefa3.page';

describe('Tarefa3Page', () => {
  let component: Tarefa3Page;
  let fixture: ComponentFixture<Tarefa3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarefa3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
