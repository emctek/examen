import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandendarioPageRoutingModule } from './candendario-routing.module';

import { CandendarioPage } from './candendario.page';
import { CabeceraComponent } from 'src/app/cabecera/cabecera/cabecera.component';
import { MenuceComponent } from 'src/app/menuce/menuce/menuce.component';
import { MenudeComponent } from 'src/app/menude/menude/menude.component';
import { MenuizComponent } from 'src/app/menuiz/menuiz/menuiz.component';
import { PaginascambioComponent } from 'src/app/paginascambio/paginascambio/paginascambio.component';
import { PieComponent } from 'src/app/pie/pie/pie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandendarioPageRoutingModule
  ],
  declarations: [CandendarioPage,CabeceraComponent,PaginascambioComponent,PieComponent,MenuizComponent,MenudeComponent,MenuceComponent]
})
export class CandendarioPageModule {}
