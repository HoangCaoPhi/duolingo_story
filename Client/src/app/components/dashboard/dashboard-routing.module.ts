import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: "/stories",
    component: StoriesComponent
  },
  {
    path: "stories/:id",
    component: StoriesDetailComponent
  },
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
