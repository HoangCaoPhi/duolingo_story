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
