import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor() {

    // creo una lista di utenti finta
    // e la salvo nel localStorage
    let jsonContent = localStorage.getItem("list-utenti");
    if (jsonContent == null) {
      let lista: Array<Utente> = new Array();
      lista.push({ id: 1, username: 'user1', password: 'qwerty', bornDate: new Date('1980-08-12'), lastLoginTime: new Date(), roles: 'ROLE_USER' });
      lista.push({ id: 2, username: 'user2', password: '123', bornDate: new Date('1990-12-12'), lastLoginTime: new Date(), roles: 'ROLE_USER' });
      lista.push({ id: 3, username: 'user3', password: '678', bornDate: new Date('2001-04-09'), lastLoginTime: new Date(), roles: 'ROLE_USER' });
      lista.push({ id: 4, username: 'user4', password: 'iop', bornDate: new Date('2003-06-01'), lastLoginTime: new Date(), roles: 'ROLE_USER' });
      lista.push({ id: 5, username: 'user5', password: 'bnm', bornDate: new Date('1956-11-30'), lastLoginTime: new Date(), roles: 'ROLE_USER' });

      localStorage.setItem("list-utenti", JSON.stringify(lista));
    }
  }

  findUtenti(): Array<Utente> {

    let result: Array<Utente> = new Array();
    let jsonContent = localStorage.getItem("list-utenti");
    if (jsonContent != null) {

      result = JSON.parse(jsonContent);
    }

    console.log("restituisco " + result.length + " elementi");

    return result;

  }

  findById(id: number): Utente {

    let list = this.findUtenti();
    return list.filter(u => u.id == id)[0];
  }

  deleteById(id: number) {

    let list = this.findUtenti();
    list.forEach((item, index) => {
      if (item.id == id) list.splice(index, 1);
    });
    localStorage.setItem("list-utenti", JSON.stringify(list));    
  }

}
