import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliProdottiComponent } from './dettagli-prodotti/dettagli-prodotti.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';

const routes: Routes = [
  { path:'', component:ListaProdottiComponent},
  { path: 'products/:productId', component:DettagliProdottiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
