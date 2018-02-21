import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './src/app/components/lista/lista.component';

const routes: Routes = [
  {path: '',
  component : ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
