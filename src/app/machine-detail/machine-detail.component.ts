import { Component, OnInit } from '@angular/core';
import { Server } from '../../models/virtual-machine';
import { ActivatedRoute } from '@angular/router';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {

  machine: Server;
  isFull = false;

  constructor(private readonly vmService: VirtualMachineService,
              private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.getMachine();
  }

  getMachine(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vmService.getById(id).subscribe(machine => this.machine = machine);
  }

  printData(value: any): string {
    return value ? value.toString() : '-';
  }

  printDate(value: string): string {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    return new Date(value).toLocaleString('en-US', options);
  }

  onToogle(): void {
    this.isFull = !this.isFull;
  }

  onFileComplete(data: any) {
    console.log(data);
  }

}
