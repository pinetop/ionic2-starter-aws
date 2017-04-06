import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';

import { User } from '../../providers/providers';

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public aboutPage = AboutPage;

  constructor(public user: User, public app: App) {
  }

  logout() {
    this.user.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }
}
