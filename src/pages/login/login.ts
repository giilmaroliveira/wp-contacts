import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { UserModel } from '../../models/user-model';

import { AuthServiceProvider } from '../../services/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: UserModel = new UserModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _authService: AuthServiceProvider) {

      if (localStorage.getItem('wpIonicToken')) {
        this.navCtrl.setRoot(TabsPage);
      }
  }

  ionViewDidLoad() {

  }

  authUser() {
    this._authService.postLogin(this.user)
      .subscribe(response => {
        localStorage.setItem('wpIonicToken', JSON.stringify(response));
        this.navCtrl.setRoot(TabsPage);
      });
  }

}
