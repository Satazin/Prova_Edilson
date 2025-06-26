import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarefa2Page } from './tarefa2.page';

describe('Tarefa2Page', () => {
  let component: Tarefa2Page;
  let fixture: ComponentFixture<Tarefa2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarefa2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
