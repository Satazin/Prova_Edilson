import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonCard } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import {AutenticacaoService} from '../service/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCard, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {
  public email: string = '';
  public senha: string = '';

  constructor(
    public autenticacao_service: AutenticacaoService,
  ) { }

  ngOnInit() {
  }
  logar(){
    let email = this.email;
    let senha = this.senha; 

    this.autenticacao_service
    .logar(email, senha)
    .subscribe(
      (_res:any) =>{
        if (_res.status == 'success'){
          sessionStorage.setItem('token', _res.token);
      }else{

      }      
      }
    );
  }
}
