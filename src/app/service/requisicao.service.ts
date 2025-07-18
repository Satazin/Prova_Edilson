import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(private http: HttpClient) { }
  
  get(dados: any) {
    return this.http.get('/requisicao', {
      params:dados
    });
  }
post(formData: any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Acces-Control-Allow-Origin': '*'
    })
  };
  return this.http.post('/requisicao', formData, httpOptions);
}
}

