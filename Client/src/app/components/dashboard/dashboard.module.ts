import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DxButtonModule, DxTextAreaModule } from 'devextreme-angular';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DxButtonModule,
    DxTextAreaModule
  ]
})
export class DashboardModule { }
