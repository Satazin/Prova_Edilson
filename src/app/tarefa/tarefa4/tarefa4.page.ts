import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-tarefa4',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './tarefa4.page.html',
  styleUrls: ['./tarefa4.page.scss']
})
export class Tarefa4Page {

  constructor(private firestore: Firestore) {}

  titulo = '';
  descricao = '';
  usuarioSelecionado = '';
  responsavel = '';
  etapas = [
    { descricao: '', status: '' },
    { descricao: '', status: '' }
  ];
  statusOptions = ['Pendente', 'Em andamento', 'Concluído'];

  async cadastrarTarefa() {
    const dados = {
      titulo: this.titulo,
      descricao: this.descricao,
      usuario_id: this.usuarioSelecionado,
      responsavel_id: this.responsavel,
      etapas: this.etapas
    };

    try {
      const tarefasRef = collection(this.firestore, 'tarefas');
      await addDoc(tarefasRef, dados);
      alert('Tarefa cadastrada com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar no Firebase');
    }
  }
}
