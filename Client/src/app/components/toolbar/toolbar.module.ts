import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DxButtonModule, DxPopoverModule, DxScrollViewModule } from 'devextreme-angular';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    DxButtonModule,
    DxPopoverModule,
    DxScrollViewModule
  ],
  exports: [NavbarComponent]
})
export class ToolbarModule { }
