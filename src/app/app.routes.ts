import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tarefa',
    loadComponent: () => import('./tarefa/tarefa.page').then( m => m.Tarefa2Page)
  },
  {
    path: 'tarefa1',
    loadComponent: () => import('./tarefa/tarefa1/tarefa1.page').then( m => m.Tarefa1Page)
  },
  {
    path: 'tarefa2',
    loadComponent: () => import('./tarefa/tarefa2/tarefa2.page').then( m => m.Tarefa2Page)
  },
  {
    path: 'tarefa3',
    loadComponent: () => import('./tarefa/tarefa3/tarefa3.page').then( m => m.Tarefa3Page)
  },
  {
    path: 'tarefa4',
    loadComponent: () => import('./tarefa/tarefa4/tarefa4.page').then( m => m.Tarefa4Page)
  },

];
