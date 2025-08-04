import { Injectable, inject } from '@angular/core';
import { Database, list, onValue, ref, remove, set } from '@angular/fire/database';
import { firstValueFrom, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {

  constructor(
    private db: Database = inject(Database)
  ) { }

  ref(url:string){
    return ref(this.db,url);
  }

  list(url:string){
    return list(this.ref(url));
  }

  add(url:string, data:any, id:number = 0){
    return from(
      (async () => {
        let indice = 1;
        const snapshop: any = await firstValueFrom(this.list(url));
        if (snapshop !== undefined){
          indice = snapshop.length + 1;
        }
        const url_indice = id == 0 ? indice : id;
        const url_full = `${url}/${url_indice}`;
        const ref = this.ref(url_full);
        data.id = url_indice;
        return set(ref, data);
      })()
    );
  }

  query(url:string, callback:any){
    return onValue(this.ref(url), callback);
  }

  remove(url: string){
    return remove(this.ref(url));
  }

}
