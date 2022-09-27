import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentesPageRoutingModule } from './docentes-routing.module';

import { DocentesPage } from './docentes.page';
import { CabeceraComponent } from '../cabecera/cabecera/cabecera.component';
import { PaginascambioComponent } from '../paginascambio/paginascambio/paginascambio.component';
import { PieComponent } from '../pie/pie/pie.component';
import { MenuizComponent } from '../menuiz/menuiz/menuiz.component';
import { MenudeComponent } from '../menude/menude/menude.component';
import { MenuceComponent } from '../menuce/menuce/menuce.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentesPageRoutingModule
  ],
  declarations: [DocentesPage, CabeceraComponent, PaginascambioComponent, PieComponent, MenuizComponent, MenudeComponent, MenuceComponent]
})
export class DocentesPageModule { }
