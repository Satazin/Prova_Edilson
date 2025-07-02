import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { getDatabase, ref, onValue } from 'firebase/database';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListarPage implements OnInit {

  public tarefas: any[] = [];

  constructor() {}

  ngOnInit() {
    this.load();
  }

  load() {
    const db = getDatabase();
    const dbRef = ref(db, '/tarefa4');

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.tarefas = Object.entries(data).map(([id, item]: any) => {
          const totalEtapas = item.etapas ? Object.keys(item.etapas).length : 0;
          return {
            id,
            titulo: item.titulo,
            responsavel: item.responsavel,
            totalEtapas
          };
        });
      } else {
        this.tarefas = [];
      }
    });
  }
}
