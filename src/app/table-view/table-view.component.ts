import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { VirtualMachine } from '../../models/virtual-machine';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  dataSource: MatTableDataSource<VirtualMachine>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly vmService: VirtualMachineService) { }

  ngOnInit() {
    this.vmService.getServers().subscribe((data) => {
      this.dataSource = new MatTableDataSource<VirtualMachine>(data);
    }, (error => console.log(error)));

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    value = value.trim().toLowerCase();

    this.dataSource.filter = value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
