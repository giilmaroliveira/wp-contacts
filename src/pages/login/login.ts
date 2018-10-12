import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authUser() {
    this._authService.postLogin(this.user)
      .subscribe(response => {
        console.log(response);
      });
  }

}
