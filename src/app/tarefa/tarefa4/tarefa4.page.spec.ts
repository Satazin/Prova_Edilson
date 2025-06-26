import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarefa4Page } from './tarefa4.page';

describe('Tarefa4Page', () => {
  let component: Tarefa4Page;
  let fixture: ComponentFixture<Tarefa4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarefa4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
