import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NecropsyTaskFulfillmentPageRoutingModule } from './necropsy-task-fulfillment-routing.module';

import { NecropsyTaskFulfillmentPage } from './necropsy-task-fulfillment.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    NecropsyTaskFulfillmentPageRoutingModule
  ],
  declarations: [NecropsyTaskFulfillmentPage]
})
export class NecropsyTaskFulfillmentPageModule {}
