import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicJsonComponent } from './components/comic-json-component/comic-json-component';
import { ComicExcelComponent } from './components/comic-excel-component/comic-excel-component';

const routes: Routes = [
  // aqui las rutas, no hay que crear routin por no hemos 
  // puestorouting false a la hora de crear 
  {path : "/", component : HomeComponent},
  {path: "/listaproductos", component: ListaProductosComponent},
  {path: "/padrecoches", component: PadreCochesComponent},
  {path: "/padredeportes", component: PadreDeportesComponent},
  {path: "/comics", component: ComicSimpleComponent},
  {path: "/comicjson", component: ComicJsonComponent},
  {path: "/comicexcel", component: ComicExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
