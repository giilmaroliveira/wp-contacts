import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactModel } from '../../models/contact-model';

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {

  contactModel: ContactModel = new ContactModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactModel = this.navParams.get('contact');
  }

  ionViewDidLoad() {

  }

}
