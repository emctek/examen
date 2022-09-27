import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandendarioPage } from './candendario.page';

const routes: Routes = [
  {
    path: '',
    component: CandendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandendarioPageRoutingModule {}
