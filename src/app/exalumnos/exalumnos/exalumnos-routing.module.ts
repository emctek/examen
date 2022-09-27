import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExalumnosPage } from './exalumnos.page';

const routes: Routes = [
  {
    path: '',
    component: ExalumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExalumnosPageRoutingModule {}
