import { Component, OnInit } from '@angular/core';
import {VirtualMachineService } from '../services/virtual-machine.service';
import { Server } from '../../models/virtual-machine';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  servers: Server[] = [];
  listOfKeys = [];

  constructor(private readonly vmService: VirtualMachineService,
              private readonly router: Router) { }

  ngOnInit() {
    this.getServers();

    if (this.servers.length) {
      this.listOfKeys = Object.keys(this.servers[0]);
    }
  }

  getServers(): void {
    this.vmService.getServers().subscribe(servers => this.servers = servers,
      error => console.error(error));
  }

  onServerSelect(id: number): void {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onCreateServerHandler(): void {
    this.router.navigateByUrl(`/create`);
  }
}
