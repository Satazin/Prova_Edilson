import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarTarefasPage } from './listar-tarefas.page';

describe('ListarTarefasPage', () => {
  let component: ListarTarefasPage;
  let fixture: ComponentFixture<ListarTarefasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
