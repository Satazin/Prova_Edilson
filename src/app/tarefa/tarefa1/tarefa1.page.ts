import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tarefa1',
  templateUrl: './tarefa1.page.html',
  styleUrls: ['./tarefa1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tarefa1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
