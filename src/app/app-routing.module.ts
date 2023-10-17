import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'plan',
        loadChildren: () => import('./plan/plan.module').then(m => m.PlanModule)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
