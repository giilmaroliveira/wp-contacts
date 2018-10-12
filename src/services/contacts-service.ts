import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environment/environment';

@Injectable()
export class ContactsServiceProvider {

  api_url = `${environment.api_url}wp/v2/contacts`;

  constructor(public http: HttpClient) { }

  getContacts() {
    return this.http.get(this.api_url);
  }

}
