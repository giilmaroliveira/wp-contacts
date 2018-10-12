import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactCreatePage } from './contact-create';

@NgModule({
  declarations: [
    ContactCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactCreatePage),
  ],
  entryComponents: [
    ContactCreatePage
  ]
})
export class ContactCreatePageModule {}
