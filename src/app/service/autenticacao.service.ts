import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    public rs: RequisicaoService,
  ) { }

  logar(email: string, senha: string) {
    const fd = new FormData();
    fd.append('controller', 'logar');
    fd.append('email', email);
    fd.append('senha', senha);

    return this.rs
    .post(fd);
  }
  validarToken(_token: string){
    const fd = new FormData();
    fd.append('controller', 'validar-token');
    fd.append('token', _token);

    return this.rs.post(fd);
  }
}
