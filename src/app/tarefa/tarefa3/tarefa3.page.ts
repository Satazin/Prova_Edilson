import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-progresso',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './tarefa3.page.html',
  styleUrls: ['./tarefa3.page.scss']
})
export class Tarefa3Page {

  constructor() { }

   ngOnInit() {
  }

  tarefas = [
    { nome: 'etapa 1', descricao: 'data de termino', valor:'320', concluida: false, cor: 'danger' },
    { nome: 'etapa 2', descricao: 'data de termino', valor:'220', concluida: false, cor: 'medium' },
    { nome: 'etapa 3', descricao: 'prevista', valor:'1830', concluida: false, cor: 'success' },
    { nome: 'etapa 4', descricao: 'data de termino', valor:'1020', concluida: false, cor: 'danger' },
  ];

    get porcentagem() {
    const feitas = this.tarefas.filter(e => e.concluida).length;
    return (feitas / this.tarefas.length) * 100;
  }
}
