import { Component, OnInit } from '@angular/core';
import { Prodotto, prodotti } from 'src/models/prodotti';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dettagli-prodotti',
  templateUrl: './dettagli-prodotti.component.html',
  styleUrls: ['./dettagli-prodotti.component.css']
})
export class DettagliProdottiComponent implements OnInit {

  prodotto:Prodotto | undefined;
  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const prodottoIdFromRoute = Number(routeParams.get('productId'));

    this.prodotto= prodotti.find(product => product.id ===prodottoIdFromRoute);
  }

}
