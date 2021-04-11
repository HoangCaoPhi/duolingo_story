import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import { SigninModule } from './signin.module';

const routes: Routes = [
  {
    path: "",
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
