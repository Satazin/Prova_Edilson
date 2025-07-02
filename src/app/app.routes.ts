import { Routes } from '@angular/router';
import {authGuard} from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tarefa',
    loadComponent: () => import('./tarefa/tarefa.page').then( m => m.Tarefa2Page),
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
  {
    path: 'tarefa2',
    loadComponent: () => import('./tarefa/tarefa2/tarefa2.page').then( m => m.Tarefa2Page),
    canActivate: [authGuard],
  },
  {
    path: 'tarefa3',
    loadComponent: () => import('./tarefa/tarefa3/tarefa3.page').then( m => m.Tarefa3Page),
    canActivate: [authGuard],
  },
  {
    path: 'tarefa4',
    loadComponent: () => import('./tarefa/tarefa4/tarefa4.page').then( m => m.Tarefa4Page),
    canActivate: [authGuard],
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'listar',
    loadComponent: () => import('./listar/listar.page').then( m => m.ListarPage),
    canActivate: [authGuard],
  },


];
