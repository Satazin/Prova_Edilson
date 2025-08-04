import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton } from '@ionic/angular/standalone';
import { RealtimeDatabaseService } from '../firebase/realtime-database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.page.html',
  styleUrls: ['./criar-tarefa.page.scss'],
  standalone: true,
  imports: [
    IonButton, 
    IonTextarea, 
    IonInput, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonInput, 
    IonTextarea
  ]
})
export class CriarTarefaPage implements OnInit {
  public id:number = 0;

  public titulo:string = "";
  public descricao:string = "";
  public responsavel:string = "";
  
  public etapa1:string = "";
  public etapa2:string = "";
  public etapa3:string = "";


  constructor(
    private rt:RealtimeDatabaseService,
    private ar:ActivatedRoute,
    private alertController: AlertController,
    private router:Router
  ) {
    this.ar.params.subscribe((params:any) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.load();
  }

  load(){
    const indice = this.id == 0 ? '' : this.id;
    this.rt.query(`/tarefas/${indice}`,(snapshot:any)=>{
      const dados = Object(snapshot.val());
      this.titulo = dados.titulo;
      this.descricao = dados.descricao;
      this.responsavel = dados.responsavel;
      this.etapa1 = dados.etapa1;
      this.etapa2 = dados.etapa2;
      this.etapa3 = dados.etapa3;
    });
  }

  salvar(){
    this.rt.add('/tarefas',{      
      titulo:this.titulo,
      descricao:this.descricao,
      responsavel:this.responsavel,
      etapas: [
        {
          descricao: this.etapa1,
          concluida: false
        },
        {
          descricao: this.etapa2,
          concluida: false
        },
        {
          descricao: this.etapa3,
          concluida: false
        }
      ]
    },this.id)
    .subscribe({
      next:(res:any) => {
        console.log(res);
        this.salvarMensagem();
        
      },
      error:(err:any) => {
        console.log('Errou: ', err);
      }
    });
  }

  async salvarMensagem() {
    const alert = await this.alertController.create({
      header: 'Tarefa',      
      message: 'Salvo com Sucesso.',
      buttons: [{
        text:'Ok',
        role:'confirm',
        handler:() => {
          this.router.navigateByUrl('/listar-tarefas');
        }
      }]
    });

    await alert.present();
  }
}
