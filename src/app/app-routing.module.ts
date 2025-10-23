import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';
import { SandboxBroadcastChannel } from './sandbox/broadcast-channel/broadcast-channel';

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
        path: 'sandbox',
        component: SandboxBroadcastChannel,
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
