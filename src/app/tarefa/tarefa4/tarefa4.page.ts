import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { RealtimeDatabaseService } from 'src/app/firebase/realtimedatabase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefa4',
  templateUrl: './tarefa4.page.html',
  styleUrls: ['./tarefa4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonList, IonItem
  ]
})
export class Tarefa4Page implements OnInit {

  public id: number = 0
  public titulo: string = ''
  public responsavel: string = ''
  public descricao: string = ''

  constructor(
    private rt: RealtimeDatabaseService,
    private ar: ActivatedRoute,
    private alertController: AlertController,
    private router: Router

  ) {

    this.ar.params.subscribe((param: any) => {
      this.id = param.id
    })
  }

  ngOnInit() {
    this.load()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Salvo Com Sucesso',
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.router.navigateByUrl('/home');
        }
      }]
    });

    await alert.present();
  }
  salvar() {  
    this.rt.add('/home', {
      titulo: this.titulo,
      responsavel: this.responsavel,
      descricao: this.descricao
    }, this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.presentAlert();
      },
      error: (err) => {
        console.log('Falhou', err);
      }
    });
  }

  load() {
    const indice = this.id == 0 ? '' : this.id;
    this.rt.query(`/home/${indice}`, (snapshot: any) => {
      const dados = Object(snapshot.val());
      this.titulo = dados.titulo;
      this.responsavel = dados.responsavel;
      this.descricao = dados.descricao;
    });
  }
}



