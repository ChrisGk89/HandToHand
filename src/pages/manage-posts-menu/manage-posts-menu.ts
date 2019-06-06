import { Component } from '@angular/core';
import { AlertController, App, NavController, NavParams } from 'ionic-angular';
/*import { DetailsPage } from "../details/details";
import { Details2Page } from "../details2/details2";
import { Details3Page } from "../details3/details3";
import { Details4Page } from "../details4/details4";*/

import { MenuPage } from "../menu/menu";
import { Menu2Page } from "../menu2/menu2";
import { Menu3Page } from "../menu3/menu3";
import { Menu4Page } from "../menu4/menu4";

//import {FirebaseService} from "../services/firebase.service";
import {AuthService} from "../services/auth.service";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-manage-tasks-menu',
  templateUrl: 'manage-posts-menu.html',
})
export class ManagePostsMenuPage {

  items: Array<any>;

  constructor(
    private app: App,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private authService: AuthService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  logout() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to logout?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.authService.Logout()
              .then(
                this.app.getRootNav().setRoot(LoginPage),
                err => console.log(err)
              )
          }
        }
      ]
    });
    confirm.present();
  }

  DonationPage() {
    this.navCtrl.push(MenuPage);
  }

  BorrowPage() {
    this.navCtrl.push(Menu2Page);
  }

  SalesPage() {
    this.navCtrl.push(Menu3Page);
  }

  JobsPage() {
    this.navCtrl.push(Menu4Page);
  }




}
