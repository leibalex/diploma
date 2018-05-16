import { Injectable } from '@angular/core';

export class NavigationService {
  menu = [
    {
      name: 'Home',
      link: 'home'
    },
    {
      name: 'User Account',
      link: 'user-account',
    },
    {
      name: 'Log in/Register',
      link: 'login'
    },
  ];

  constructor() {}

  getMenuItems() {
    return this.menu;
  }
}
