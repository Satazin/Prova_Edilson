import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequisicaoService } from '../service/requisicao.service';
import {IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ]
})
export class CadastroPage implements OnInit {
  public nome: string = '';
  public email: string = '';
  public senha: string = '';

  constructor(
    public rs: RequisicaoService,
  ) { }

  ngOnInit() {
  }

  salvar() {

    const fd = new FormData();
    fd.append('controller', 'cadastro-usuario');
    fd.append('nome', this.nome);
    fd.append('email', this.email);
    fd.append('senha', this.senha);

    this.rs.post(fd)
    .subscribe();
  }
}
