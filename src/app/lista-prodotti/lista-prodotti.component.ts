import { Component, OnInit } from '@angular/core';
import { prodotti } from '../../models/prodotti';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {
  listaProdotti=prodotti;

  constructor() { }

  ngOnInit(): void {
  }

  share(nomeProdotto:string){
    window.alert("Il prodotto " + nomeProdotto + " è stato condiviso");
  }

}
