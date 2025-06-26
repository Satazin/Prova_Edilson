import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarefa1Page } from './tarefa1.page';

describe('Tarefa1Page', () => {
  let component: Tarefa1Page;
  let fixture: ComponentFixture<Tarefa1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarefa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
