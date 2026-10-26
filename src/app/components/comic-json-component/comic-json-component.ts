import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';


@Component({
  selector: 'app-comic-json-component',
  standalone: false,
  styleUrl: './comic-json-component.css',
  templateUrl: './comic-json-component.html',
})
export class ComicJsonComponent {
  public arrayComics: Array<Comic>;
  
  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComics(): void {
    //aqui estamos es public
    let path = "./assets/comics.json";
    fetch(path).then(response => response.json()).then( (data: any) => {
      //recorremos tod el array de comics json
      for (let elem of data ) {
        //creamos u comic de angular MODELO
        let comic = new Comic(
          elem.nombre, elem.imagen, elem.descripcion);
        //lo añadimos al array de comics
        this.arrayComics.push(comic);
        console.log(elem)
      }
      this._cdr.detectChanges();
    })
  }
}
