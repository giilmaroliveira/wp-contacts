import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environment/environment';

@Injectable()
export class PostsServiceProvider {

  api_url = `${environment.api_url}wp/v2/posts`;


  constructor(public http: HttpClient) {
    
  }

  getPosts() {
    return this.http.get(this.api_url);
  }



}
