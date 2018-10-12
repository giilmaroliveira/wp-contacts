import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactDetailPage } from '../contact-detail/contact-detail';
import { ContactCreatePage } from '../contact-create/contact-create';

import { ContactsServiceProvider } from '../../services/contacts-service';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contacts;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _contactsService: ContactsServiceProvider) {
      this.getContacts();
  }

  ionViewDidLoad() {
  }

  getContacts() {
    this._contactsService.getContacts()
      .subscribe(response => {
        this.contacts = response; 
      })
  }

  showContactsDetails(contact) {
    this.navCtrl.push(ContactDetailPage, { contact: contact })
  }

  createContact() {
    this.navCtrl.push(ContactCreatePage);
  }

}
