import {Component, Input, OnInit} from '@angular/core';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-managing-control-buttons',
  templateUrl: './managing-control-buttons.component.html',
  styleUrls: ['./managing-control-buttons.component.css']
})
export class ManagingControlButtonsComponent implements OnInit {

  @Input() machine;

  constructor(private readonly vmService: VirtualMachineService) { }

  ngOnInit() {
  }

  run(): void {

  }

  onDelete(): void {
    this.vmService.deleteById(this.machine.id).subscribe((data) => {
      console.log('Success deleted');
    }, (error) => {
      console.log(error);
    });
  }

}
