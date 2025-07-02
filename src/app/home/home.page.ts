import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { RealtimeDatabaseService } from '../firebase/realtimedatabase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  public dados: Array<any> = [];

  constructor(
    public rt: RealtimeDatabaseService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.rt.query('/tarefas', (snapshot: any) => {
      const val = snapshot.val();
      if (val !== null) {
        this.dados = Object.entries(val).map(([key, item]: [string, any]) => {
          const totalEtapas = item.etapas ? Object.keys(item.etapas).length : 0;
          return {
            id: key,
            titulo: item.titulo,
            responsavel: item.responsavel,
            totalEtapas,
          };
        });
      } else {
        this.dados = [];
      }
    });
  }
}
