import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';

const routes: Routes = [
  // aqui las rutas, no hay que crear routin por no hemos 
  // puestorouting false a la hora de crear 
  {path : "/", component : HomeComponent},
  {path: "/listaproductos", component: ListaProductosComponent},
  {path: "/padrecoches", component: PadreCochesComponent},
  {path: "/padredeportes", component: PadreDeportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
