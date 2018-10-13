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
  boolUpdate: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _contactService: ContactsServiceProvider) {

      let contactParam = this.navParams.get('contact');
      if (contactParam) {
        this.contactModel = contactParam;
        this.boolUpdate = true;
      }
  }

  ionViewDidLoad() {

  }

  addContact() {

    if (!this.boolUpdate) {

      this.contactModel.status = "publish";
      delete this.contactModel.id;
      
      this._contactService.createContact(this.contactModel)
        .subscribe(response => {
          this.navCtrl.setRoot(ContactsPage);
        })
    } else {
      this._contactService.updateContact(this.contactModel)
      .subscribe(response => {
        this.navCtrl.setRoot(ContactsPage);
      })
    }

  }

}
