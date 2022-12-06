import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUtenteComponent } from './detail-utente/detail-utente.component';
import { ListUtenteComponent } from './list-utente/list-utente.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-utente', pathMatch: 'full'}, // redirect to `first-component`
  { path: 'list-utente', component: ListUtenteComponent },
  { path: 'detail-utente/:id', component: DetailUtenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
