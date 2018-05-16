import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { WindowService } from './services/window.service';
import { NavigationService } from './services/navigation.service';
import { VirtualMachineService } from './services/virtual-machine.service';
import { MessageService } from './services/message.service';
import { StateManagingService } from './services/state-managing.service';

import { UserAccountComponent } from './user-account/user-account.component';
import { MachinesComponent } from './machines/machines.component';
import { MachineDetailComponent } from './machine-detail/machine-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagingControlButtonsComponent } from './managing-control-buttons/managing-control-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserAccountComponent,
    MachinesComponent,
    MachineDetailComponent,
    DashboardComponent,
    ManagingControlButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WindowService, NavigationService, VirtualMachineService, MessageService, StateManagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
