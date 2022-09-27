import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadresfamiliaPage } from './padresfamilia.page';

const routes: Routes = [
  {
    path: '',
    component: PadresfamiliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadresfamiliaPageRoutingModule {}
