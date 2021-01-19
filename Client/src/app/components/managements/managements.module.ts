import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { ManagementsComponent } from './managements.component';
import { ToolbarModule } from '../toolbar/toolbar.module';


@NgModule({
  declarations: [ManagementsComponent],
  imports: [
    CommonModule,
    ManagementsRoutingModule,
    ToolbarModule
  ]
})
export class ManagementsModule { }
