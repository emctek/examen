import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CabeceraComponent } from '../cabecera/cabecera/cabecera.component';
import { PaginascambioComponent } from '../paginascambio/paginascambio/paginascambio.component';
import { PieComponent } from '../pie/pie/pie.component';
import { MenuizComponent } from '../menuiz/menuiz/menuiz.component';
import { MenuceComponent } from '../menuce/menuce/menuce.component';
import { MenudeComponent } from '../menude/menude/menude.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,CabeceraComponent,PaginascambioComponent,PieComponent,MenuizComponent,MenudeComponent,MenuceComponent]
})
export class HomePageModule {}
