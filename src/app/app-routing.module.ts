import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {MachineDetailComponent} from './machine-detail/machine-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CreateNewServerComponent} from './create-new-server/create-new-server.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user-account', component: TableViewComponent},
  {path: 'detail/:id', component: MachineDetailComponent},
  {path: 'create', component: CreateNewServerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
