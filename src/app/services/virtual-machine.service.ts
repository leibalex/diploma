import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualMachine } from '../../models/virtual-machine';
import { VIRTUALMACHINES } from '../../models/virtual-machine-mock-data';
import {of} from 'rxjs/observable/of';

@Injectable()
export class VirtualMachineService {
  constructor(private httpClient: HttpClient) {}

  getMachines(): Observable<VirtualMachine[]> {
      return of(VIRTUALMACHINES);
  }

  getById(id: number): Observable<VirtualMachine> {
    return of(VIRTUALMACHINES.find(machine => machine.id === id));
  }
}
