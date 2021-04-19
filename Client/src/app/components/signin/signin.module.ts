import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { DxAutocompleteModule, DxButtonModule, DxFormModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
 

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxTextBoxModule,
    DxValidatorModule
  ]
})
export class SigninModule { }
