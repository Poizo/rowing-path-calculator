import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './containers';
import { MapComponent } from './components';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        component: PlanComponent,
        children: [
            {
                path: 'map',
                component: MapComponent,
                canDeactivate: [],
                data: { }
            },
            {
                path: '**',
                redirectTo: 'map'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanRoutingModule {}
