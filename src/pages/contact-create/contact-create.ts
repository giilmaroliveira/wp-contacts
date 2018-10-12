import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactsPage } from '../contacts/contacts';

import { ContactModel } from '../../models/contact-model';

import { ContactsServiceProvider } from '../../services/contacts-service';

@IonicPage()
@Component({
  selector: 'page-contact-create',
  templateUrl: 'contact-create.html',
})
export class ContactCreatePage {

  contactModel: ContactModel = new ContactModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _contactService: ContactsServiceProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactCreatePage');
  }

  addContact() {

    this.contactModel.status = "publish";
    
    this._contactService.createContact(this.contactModel)
      .subscribe(response => {
        this.navCtrl.setRoot(ContactsPage);
      })

  }

}
