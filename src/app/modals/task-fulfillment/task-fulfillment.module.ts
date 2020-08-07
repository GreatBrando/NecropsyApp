import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskFulfillmentPageRoutingModule } from './task-fulfillment-routing.module';

import { TaskFulfillmentPage } from './task-fulfillment.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    IonicModule,
    TaskFulfillmentPageRoutingModule
  ],
  declarations: [TaskFulfillmentPage]
})
export class TaskFulfillmentPageModule {}
