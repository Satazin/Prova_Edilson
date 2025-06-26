import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa1',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './tarefa4.page.html',
  styleUrls: ['./tarefa4.page.scss']
})
export class Tarefa1Page {

  constructor() { }

   ngOnInit() {
  }

  titulo = '';
  descricao = '';
  usuarioSelecionado = '';
  responsavel = '';
  etapas = [
    { descricao: '', status: '' },
    { descricao: '', status: '' }
  ];
  statusOptions = ['Pendente', 'Em andamento', 'Concluído'];
}
