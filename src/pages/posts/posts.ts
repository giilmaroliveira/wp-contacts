import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PostsServiceProvider } from '../../services/posts-service';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  postsList;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _postsService: PostsServiceProvider) {
      this.getAllPosts();
  }

  ionViewDidLoad() {
    
  }

  getAllPosts() {
    this._postsService.getPosts()
      .subscribe(response => {
        this.postsList = response;
      })
  }

}
