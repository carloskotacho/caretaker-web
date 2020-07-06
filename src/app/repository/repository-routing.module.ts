import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {
    path: 'repos',
    component: MainComponent,
  },
  {
    path: ':fullname',
    component: RepositoryComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
