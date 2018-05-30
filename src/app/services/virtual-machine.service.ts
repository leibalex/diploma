import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Server } from '../../models/virtual-machine';
import { SERVERS } from '../../models/virtual-machine-mock-data';
import {of} from 'rxjs/observable/of';

@Injectable()
export class VirtualMachineService {
  servers = SERVERS;
  constructor(private httpClient: HttpClient) {}

  getServers(): Observable<Server[]> {
    console.log(...this.servers);
      return of(this.servers);
  }

  getById(id: string): Observable<Server> {
    return of(this.servers.find(machine => machine.id === id));
  }

  deleteById(id: string): Observable<Server[]> {
    this.servers = this.servers.filter((server) => server.id !== id);
    return of(this.servers);
  }

  create(name: string, imageRef: string, flavorRef: string): Observable<any> {

    return of(this.servers);
  }
}
