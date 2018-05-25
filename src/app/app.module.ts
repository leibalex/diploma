import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatProgressBarModule, MatPaginatorModule, MatSortModule, MatTableDataSource } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';


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
import { CreateNewServerComponent } from './create-new-server/create-new-server.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFileUploadComponent } from './material-file-upload/material-file-upload.component';
import { TableViewComponent } from './table-view/table-view.component';

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
    ManagingControlButtonsComponent,
    CreateNewServerComponent,
    MaterialFileUploadComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule
  ],
  providers: [WindowService, NavigationService, VirtualMachineService, MessageService, StateManagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
