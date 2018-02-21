import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';
import { ItemLista } from '../../share/item-lista';
import { RangoEtario } from '../../share/rango-etario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private listaS:ListaService;
  protected lista:ItemLista[];  
  protected rangos:RangoEtario[];

  constructor() { 
    this.listaS = new ListaService();
    this.lista = this.listaS.get();
    this.rangos = this.listaS.getRangosEtarios();
    console.log(this.rangos);
  }

  ngOnInit() {
  }

}
