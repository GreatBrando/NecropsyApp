import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNecropsyDetailsPageRoutingModule } from './view-necropsy-details-routing.module';

import { ViewNecropsyDetailsPage } from './view-necropsy-details.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ViewNecropsyDetailsPageRoutingModule
  ],
  declarations: [ViewNecropsyDetailsPage]
})
export class ViewNecropsyDetailsPageModule {}
