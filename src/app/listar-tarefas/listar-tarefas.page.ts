import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons} from 'ionicons';
import { pencil,trash,add } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { RealtimeDatabaseService } from '../firebase/realtime-database.service';
import type { OverlayEventDetail } from '@ionic/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonList, IonAlert, IonItem, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.page.html',
  styleUrls: ['./listar-tarefas.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonButton, IonItem, IonAlert, IonList, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ListarTarefasPage implements OnInit {
  public dados:Array<any> = [];

  constructor(
    public rt:RealtimeDatabaseService
  ) {
    addIcons({pencil,trash,add});
  }

  ngOnInit() {
    this.load();
  }

  load(){
    this.rt.query('/tarefas',(snapshot:any) => {
      if (snapshot.val() !== null){
        this.dados = Object(snapshot.val()).
        map((item:any, key:number) => {
          item.id = key;
          return item;
        }).filter((item:any) => item != null)
      }else{
        this.dados = [];
      }
    });
  }

  excluir(id:number){
    this.rt.remove(`tarefas/${id}`).then();
  }

  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>,id:number) {
    console.log(`Dismissed with role: ${event.detail.role}`);
    if (event.detail.role == 'confirm'){
      this.excluir(id);
    }
  }
}
