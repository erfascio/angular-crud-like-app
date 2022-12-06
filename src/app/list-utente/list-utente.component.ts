import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-list-utente',
  templateUrl: './list-utente.component.html',
  styleUrls: ['./list-utente.component.css']
})
export class ListUtenteComponent implements OnInit {

  route: ActivatedRoute;
  router: Router;
  service: UtenteService;
  list: Array<Utente> = new Array();

  constructor(route: ActivatedRoute, service: UtenteService, router: Router) { 

    this.route = route;
    this.router = router;
    this.service = service;
  }

  ngOnInit(): void {
    this.list = this.service.findUtenti();
  }

  detail(id: number) {
    // vado al dettaglio
    this.router.navigateByUrl("/detail-utente/" + id);
  }

  edit(id: number) {
    // vado alla modifica
    // TODO inserire navigazione verso URL /update-utente/id
  }

  deleteEntity(id: number) {

    if (confirm("Sei sicuro di voler eliminare l'elemento selezionato?")) {
      this.service.deleteById(id);
      this.ngOnInit();
    }
  }
}
