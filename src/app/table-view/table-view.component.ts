import {AfterViewInit, Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Server } from '../../models/virtual-machine';
import { VirtualMachineService } from '../services/virtual-machine.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})

export class TableViewComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<Server> = new MatTableDataSource<Server>();
  displayedColumns = ['id', 'userId', 'hostId', 'status'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly vmService: VirtualMachineService,
              private readonly router: Router) {}

  ngOnInit() {
    this.vmService.getServers().subscribe((data) => {
      setTimeout(() => {
        console.dir(data);
        this.dataSource.data = data;
        console.dir(this.dataSource.data);
      }, 2000);
      console.log(`DataSource: ${this.dataSource}`);

    }, (error => console.log(error)));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onServerSelect(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }

  getDate(value: string): string {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    return new Date(value).toLocaleString('en-US', options);
  }

  applyFilter(value: string) {
    value = value.trim().toLowerCase();

    this.dataSource.filter = value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
