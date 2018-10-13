import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ContactsPage } from '../contacts/contacts';
import { ContactCreatePage } from '../contact-create/contact-create';

import { ContactModel } from '../../models/contact-model';

import { ContactsServiceProvider } from '../../services/contacts-service';

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {

  contactModel: ContactModel = new ContactModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _contactService: ContactsServiceProvider) {
    this.contactModel = this.navParams.get('contact');
  }

  ionViewDidLoad() {

  }

  editContact(contact) {
    this.navCtrl.push(ContactCreatePage, { contact: contact })
  }

  showMessage() {
    const confirm = this.alertCtrl.create({
      title: 'WP Contact',
      message: 'Deseja excluir este contato?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.deleteContact();
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmation() {
    const alert = this.alertCtrl.create({
      title: 'WP Contact',
      subTitle: 'Contato excluído com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  deleteContact() {
    this._contactService.deleteContact(this.contactModel.id)
      .subscribe(response => {
        this.showConfirmation();
        this.navCtrl.setRoot(ContactsPage);
      })
  }

}
