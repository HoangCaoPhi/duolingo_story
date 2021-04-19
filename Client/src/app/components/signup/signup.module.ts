import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { DxButtonModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule
  ]
})
export class SignupModule { }
