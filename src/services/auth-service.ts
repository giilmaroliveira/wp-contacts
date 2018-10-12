import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserModel } from '../models/user-model';

import { environment } from '../environment/environment';

@Injectable()
export class AuthServiceProvider {

  api_url = `${environment.api_url}jwt-auth/v1/token`;

  constructor(public http: HttpClient) { }

  postLogin(user: UserModel) {

    let headers = new HttpHeaders();

    headers.set('Content-Type','application/json');

    return this.http.post(this.api_url,user, { headers: headers });
  }

}
