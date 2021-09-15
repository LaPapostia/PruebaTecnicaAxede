import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoHotelesComponent } from './listado-hoteles/listado-hoteles.component';

const routes: Routes = [
  { path: '', component: ListadoHotelesComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
