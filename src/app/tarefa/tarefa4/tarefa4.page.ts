import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tarefa4',
  templateUrl: './tarefa4.page.html',
  styleUrls: ['./tarefa4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tarefa4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
