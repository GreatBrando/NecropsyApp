import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProcedurePageRoutingModule } from './view-procedure-routing.module';

import { ViewProcedurePage } from './view-procedure.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ViewProcedurePageRoutingModule
  ],
  declarations: [ViewProcedurePage]
})
export class ViewProcedurePageModule {}
