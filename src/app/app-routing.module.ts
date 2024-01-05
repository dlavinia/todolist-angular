import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'lista', component: ListaComponent},
  {path:'card', component: CardComponent},
  {path:'delete/:id', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
