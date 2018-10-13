import { Component } from '@angular/core';

import { ContactsPage } from '../contacts/contacts';
import { HomePage } from '../home/home';
import { PostsPage } from '../posts/posts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PostsPage;
  tab3Root = ContactsPage;

  constructor() {

  }
}
