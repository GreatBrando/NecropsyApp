import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PathRequestPageRoutingModule } from './path-request-routing.module';

import { PathRequestPage } from './path-request.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    PathRequestPageRoutingModule
  ],
  declarations: [PathRequestPage]
})
export class PathRequestPageModule {}
