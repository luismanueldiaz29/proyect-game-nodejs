import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGamerComponent } from './components/add-gamer/add-gamer.component';
import { ListGamerComponent } from './components/list-gamer/list-gamer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/game_list',
    pathMatch: 'full'
  },
  {
    path : 'game_add',
    component : AddGamerComponent
  },
  {
    path : 'game_list',
    component : ListGamerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
