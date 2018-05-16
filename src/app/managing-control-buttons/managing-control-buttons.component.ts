import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-managing-control-buttons',
  templateUrl: './managing-control-buttons.component.html',
  styleUrls: ['./managing-control-buttons.component.css']
})
export class ManagingControlButtonsComponent implements OnInit {

  @Input() machine;

  constructor() { }

  ngOnInit() {
  }

  run(): void {

  }

  stop(): void {

  }

  refresh(): void {

  }

}
