import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-detail-utente',
  templateUrl: './detail-utente.component.html',
  styleUrls: ['./detail-utente.component.css']
})
export class DetailUtenteComponent implements OnInit {

  id: number = 0;
  route: ActivatedRoute;
  detail?: Utente;
  service: UtenteService;

  constructor(route: ActivatedRoute, service: UtenteService) {
    this.route = route;
    this.service = service;
  }

  ngOnInit(): void {
    console.log("ngOnInit detail");
    let func1 = ({
      next: (params: any) => {
        this.id = params['id'];
        console.log("params['id'] " + this.id);
        this.detail = this.service.findById(this.id);
      },
      error: (e: any) => {
        console.log(e);
        alert("Generic Error");
      }
    });
    this.route.params.subscribe(func1);
  }

}
