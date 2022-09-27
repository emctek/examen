import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AspirantesPageRoutingModule } from './aspirantes-routing.module';

import { AspirantesPage } from './aspirantes.page';
import { CabeceraComponent } from '../../cabecera/cabecera/cabecera.component';
import { PaginascambioComponent } from '../../paginascambio/paginascambio/paginascambio.component';
import { PieComponent } from 'src/app/pie/pie/pie.component';
import { MenuizComponent } from '../../menuiz/menuiz/menuiz.component';
import { MenuceComponent } from 'src/app/menuce/menuce/menuce.component';
import { MenudeComponent } from 'src/app/menude/menude/menude.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AspirantesPageRoutingModule
  ],
  declarations: [AspirantesPage,CabeceraComponent,PaginascambioComponent,PieComponent,MenuizComponent,MenudeComponent,MenuceComponent]
})
export class AspirantesPageModule {}
