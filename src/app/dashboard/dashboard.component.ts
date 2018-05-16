import { Component, OnInit } from '@angular/core';
import {VirtualMachineService } from '../services/virtual-machine.service';
import { VirtualMachine } from '../../models/virtual-machine';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  machines: VirtualMachine[] = [];

  constructor(private readonly vmService: VirtualMachineService,
              private readonly router: Router) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.vmService.getMachines().subscribe(machines => this.machines = machines.slice(1, 5),
      error => console.error(error));
  }

  onMachineSelect(id: number): void {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
