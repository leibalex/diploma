import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WindowService} from '../services/window.service';
import {NavigationService} from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: object[];
  // logo = '/assets/img/logo3.png';

  @ViewChild('header') elementView: ElementRef;

  constructor(
    private navService: NavigationService,
    private windowService: WindowService
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void {
    this.menu = this.navService.getMenuItems();
  }
}
