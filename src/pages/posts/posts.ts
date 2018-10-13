import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsServiceProvider } from '../../services/posts-service';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _postsService: PostsServiceProvider) {
      this.getAllPosts
  }

  ionViewDidLoad() {
    
  }

  getAllPosts() {
    this._postsService.getPosts()
      .subscribe(response => {
        console.log(response);
      })
  }

}
