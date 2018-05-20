import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualMachine } from '../../models/virtual-machine';
import { VIRTUALMACHINES } from '../../models/virtual-machine-mock-data';
import {of} from 'rxjs/observable/of';

@Injectable()
export class VirtualMachineService {
  servers = VIRTUALMACHINES;
  constructor(private httpClient: HttpClient) {}

  getServers(): Observable<VirtualMachine[]> {
    console.log(...this.servers);
      return of(this.servers);
  }

  getById(id: number): Observable<VirtualMachine> {
    return of(this.servers.find(machine => machine.id === id));
  }

  deleteById(id: number): Observable<VirtualMachine[]> {
    this.servers = this.servers.filter((server) => server.id !== id)
    return of(this.servers);
  }

  create(name: string, imageRef: string, flavorRef: string): Observable<any> {
    const newServer: VirtualMachine = {
      id: 6,
      userId: name,
      hostId: imageRef,
      accessIPv4: '1',
      accessIPv6: '2'
    };
    this.servers = [...this.servers, newServer];
    console.log(...this.servers);

    return of(this.servers);
  }
}
