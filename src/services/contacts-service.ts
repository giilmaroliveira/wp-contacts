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
    return this.http.post(this.api_url, JSON.stringify(contact), { headers: this.createHeaders() });
  }

  deleteContact(id: number) {
    return this.http.delete(this.api_url + `/${id}`, { headers: this.createHeaders() })
  }

  updateContact(contact: ContactModel) {
    return this.http.put(this.api_url + `/${contact.id}`, JSON.stringify(contact), { headers: this.createHeaders() });
  }

  createHeaders() : HttpHeaders {
    let token = JSON.parse(localStorage.getItem('wpIonicToken')).token;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return headers;
  }

}
