import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon, IonButton, IonList, IonLabel, IonItem, AlertController, IonAvatar,IonCard, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, trashOutline, trashBinOutline, addOutline } from 'ionicons/icons'
import { RealtimeDatabaseService } from '../firebase/realtimedatabase.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, RouterLink, IonIcon, IonButton, IonList, IonLabel, IonItem, CommonModule, IonAvatar, IonCard, IonCardContent],
})

export class HomePage {
  public dados: Array<any> = []
  constructor(
    public rt: RealtimeDatabaseService,
    public alertController: AlertController,
  ) {

    {
      addIcons({ add, trashOutline, trashBinOutline, addOutline })
    }
  }

  ngOnInit() {
    this.load()
  }

  load() {
    this.rt.query('/home', (snapshot: any) => {
      const val = snapshot.val();
      if (val !== null) {
        this.dados = Object.entries(val).map(([key, item]: [string, any]) => {
          item.id = key;
          return item;
        });
      } else {
        this.dados = [];
      }
    });
  }
}