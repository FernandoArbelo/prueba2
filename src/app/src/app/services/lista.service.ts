import { Injectable } from '@angular/core';
import { ItemLista } from '../share/item-lista';
import { RangoEtario } from '../share/rango-etario';
import { IHashMapActividades } from '../share/IHashMapActividades';

@Injectable()
export class ListaService {

  constructor() {

  }

  getRangosEtarios(): RangoEtario[] {
    var rangos: RangoEtario[];
    rangos = new Array();
    rangos.push(new RangoEtario(1, "Niños"));
    rangos.push(new RangoEtario(2, "Adolecentes"));
    ///rangos.push(new RangoEtario(3, "Adolecentes/Adultos"));
    rangos.push(new RangoEtario(4, "Familiar"));
    //rangos.push(new RangoEtario(5, "Menores"));
    console.log(rangos);
    return rangos;
  }

  get(): any {
    let lista: IHashMapActividades = {}; 
    //lista = new Array();

    lista[1] = new Array();
    lista[2] = new Array();
    lista[4] = new Array();

    lista[1].push(new ItemLista("10:00", 1, "Taller de color en DAS.", ""));
    lista[4].push(new ItemLista("11:00",4, "Ritmos latinos en terraza.", ""));
    lista[4].push(new ItemLista("11:00",4, "Escuelita de tenis.", ""));
    lista[1].push(new ItemLista("14:30", 1, "Taller de color en DAS.", ""));
    lista[1].push(new ItemLista("19:00", 1, "Competencia de relevos.", ""));
    //lista[1].push(new ItemLista("19:00", 1, "Competencia de relevos en polideportivo", ""));
    lista[2].push(new ItemLista("22:15", 1, "Juegos y desafios en polideportivo.", ""));
    return lista;
  }

}