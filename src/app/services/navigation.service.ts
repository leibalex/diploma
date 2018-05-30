import { Injectable } from '@angular/core';

export class NavigationService {
  menu = [
    {
      name: 'Home',
      link: 'home'
    },
    {
      name: 'Dashboard',
      link: 'user-account',
    },
    {
      name: 'Create new Server',
      link: 'create'
    },
  ];

  constructor() {}

  getMenuItems() {
    return this.menu;
  }
}
