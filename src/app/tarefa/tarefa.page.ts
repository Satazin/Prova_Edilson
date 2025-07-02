import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tarefa2',
  templateUrl: './tarefa.page.html',
  styleUrl: './tarefa.page.scss',
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tarefa2Page {

  constructor() { }

   ngOnInit() {
  }

  etapas = [
    { nome: 'etapa 1', concluida: false, cor: 'danger' },
    { nome: 'etapa 2', concluida: false, cor: 'success' },
    { nome: 'etapa 3', concluida: false, cor: 'warning' },
    { nome: 'etapa 4', concluida: false, cor: 'tertiary' },
    { nome: 'etapa 5', concluida: false, cor: 'primary' },
  ];
  
  get porcentagem() {
    const feitas = this.etapas.filter(e => e.concluida).length;
    return (feitas / this.etapas.length) * 100;
  }
}
