import { Component } from '@angular/core';

import { ContactsPage } from '../contacts/contacts';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactsPage;

  constructor() {

  }
}
