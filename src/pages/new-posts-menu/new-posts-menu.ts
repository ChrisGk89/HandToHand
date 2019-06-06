import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
//import { FirebaseService } from "../services/firebase.service";
//import { MenuPage } from "../menu/menu";
//import { Menu2Page } from "../menu2/menu2";
//import { Menu3Page } from "../menu3/menu3";
//import { Menu4Page } from "../menu4/menu4";

//import { AuthService } from '../services/auth.service';



@Component({
  selector: 'page-new-tasks-menu',
  templateUrl: 'new-posts-menu.html',
})
export class NewPostsMenuPage {

  items: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              //private modalCtrl: ModalController,
              //private authService: AuthService,
              //private firebaseService: FirebaseService

  ) {}

 /* ionViewDidLoad() {
    this.getData()
    this.getData2()
    this.getData3()
    this.getData4()
  }

  //////////////////////////////////////////////////////////

  getData(){
    this.firebaseService.getDonation()
      .then(tasks => {
        this.items = tasks;
      })
  }

  openNewUserModal(){
    let modal = this.modalCtrl.create(NewPostModalPage);
    modal.onDidDismiss(data => {
      this.getData();
    });
    modal.present();
  }

  //////////////////////////////////////////////////////////

  getData2(){
    this.firebaseService.getBorrows()
      .then(tasks2 => {
        this.items = tasks2;
      })
  }

  openNewUserModal2(){
    let modal = this.modalCtrl.create(NewPostModal2Page);
    modal.onDidDismiss(data => {
      this.getData2();
    });
    modal.present();
  }


  //////////////////////////////////////////////////////////

  getData3(){
    this.firebaseService.getSale()
      .then(tasks3 => {
        this.items = tasks3;
      })
  }

  openNewUserModal3(){
    let modal = this.modalCtrl.create(NewPostModal3Page);
    modal.onDidDismiss(data => {
      this.getData3();
    });
    modal.present();
  }

  //////////////////////////////////////////////////////////

  getData4(){
    this.firebaseService.getBorrows()
      .then(tasks4 => {
        this.items = tasks4;
      })
  }

  openNewUserModal4(){
    let modal = this.modalCtrl.create(NewPostModal4Page);
    modal.onDidDismiss(data => {
      this.getData4();
    });
    modal.present();
  }

  //////////////////////////////////////////////////////////

*/


}
