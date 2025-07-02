import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertController} from '@ionic/angular/standalone';
import { RealtimeDatabaseService } from '../firebase/realtimedatabase.service';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonicModule,CommonModule],
})
export class HomePage {
  public dados: Array<any> = [];
  constructor(
    public rt : RealtimeDatabaseService,
    private alertController: AlertController
  ){}

  ngOnInit() {
    this.load();
    }
  
load(){
  this.rt.query('/cadastro-tarefa', (snapshot: any) => {
    if(snapshot.val() !== null){
    this.dados = Object(snapshot.val()).
    map((item: any, key:number) => {
        item.id = key;
        return item;
      }).filter((item: any) => item != null);
    }else{
      this.dados = [];
    }
    });
  }
}
