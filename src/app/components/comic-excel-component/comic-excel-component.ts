import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';
// importamos libreria y le damos un alias para trabajar
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-comic-excel-component',
  standalone: false,
  styleUrl: './comic-excel-component.css',
  templateUrl: './comic-excel-component.html',
})
export class ComicExcelComponent {
  public arrayComics: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComics(): void{
    let path = "./assets/comics.xlsx";
    fetch(path).then(response => response.arrayBuffer()).then((buffer) => {
      // leer el buffer y transformarlo al libro de excel 
      let workbook = XLSX.read(buffer, { type: 'array' });
      //para recuperar las hojas se hace por name 
      // recuperamos el name de la hoja
      let hojaName = workbook.SheetNames[0];
      //recuperamos la hoja de excel
      let hoja = workbook.Sheets[hojaName];
      // como tien eformato de tabla, lo ocnvertimos a json 
      let data = XLSX.utils.sheet_to_json(hoja);
      console.log(data);
      // lo mismo que un for 
      this.arrayComics = data.map((c: any) => new Comic(c.nombre, c.imagen, c.descripcion));
      this._cdr.detectChanges();
    })
  }
}
