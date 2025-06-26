import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tarefa3',
  templateUrl: './tarefa3.page.html',
  styleUrls: ['./tarefa3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tarefa3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
