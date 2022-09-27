import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresasPageRoutingModule } from './empresas-routing.module';

import { EmpresasPage } from './empresas.page';
import { CabeceraComponent } from 'src/app/cabecera/cabecera/cabecera.component';
import { PaginascambioComponent } from 'src/app/paginascambio/paginascambio/paginascambio.component';
import { PieComponent } from 'src/app/pie/pie/pie.component';
import { MenuizComponent } from '../../menuiz/menuiz/menuiz.component';
import { MenuceComponent } from 'src/app/menuce/menuce/menuce.component';
import { MenudeComponent } from 'src/app/menude/menude/menude.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresasPageRoutingModule
  ],
  declarations: [EmpresasPage,CabeceraComponent,PaginascambioComponent,PieComponent,MenuizComponent,MenudeComponent,MenuceComponent]
})
export class EmpresasPageModule {}
