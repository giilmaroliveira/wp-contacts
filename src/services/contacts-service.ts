import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ContactModel } from '../models/contact-model';

import { environment } from '../environment/environment';

@Injectable()
export class ContactsServiceProvider {

  api_url = `${environment.api_url}wp/v2/contacts`;

  constructor(public http: HttpClient) { }

  getContacts() {
    return this.http.get(this.api_url);
  }

  createContact(contact: ContactModel) {


    let token = JSON.parse(localStorage.getItem('wpIonicToken')).token;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.api_url, JSON.stringify(contact), { headers: headers });
  }

}
