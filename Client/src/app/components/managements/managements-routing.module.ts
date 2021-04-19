import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementsComponent } from './managements.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementsComponent,
    children: [
      {
        path: 'languages',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then(m => m.SignupModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('../signin/signin.module').then(m => m.SigninModule)
      },
      {
        path: '**',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementsRoutingModule { }
