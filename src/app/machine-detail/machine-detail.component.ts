import { Component, OnInit } from '@angular/core';
import { VirtualMachine } from '../../models/virtual-machine';
import { ActivatedRoute } from '@angular/router';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {

  machine: VirtualMachine;

  constructor(private readonly vmService: VirtualMachineService,
              private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.getMachine();
  }

  getMachine(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vmService.getById(id).subscribe(machine => this.machine = machine);
  }

  onFileComplete(data: any) {
    console.log(data);
  }

}
