import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailPage } from './contact-detail';

@NgModule({
  declarations: [
    ContactDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailPage),
  ],
  entryComponents: [
    ContactDetailPage
  ]
})
export class ContactDetailPageModule {}
