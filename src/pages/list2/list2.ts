import { Component } from '@angular/core';
import {AlertController, App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {AuthService} from "../services/auth.service";
//import {ShowMenu4ResultsPage} from "../show-menu4-results/show-menu4-results";
//import {MapsPage} from "../maps/maps";
import {Maps2Page} from "../maps2/maps2";
//import {Maps2Page} from "../maps2/maps2";

/**
 * Generated class for the List2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html',
})
export class List2Page {

  constructor(private app: App,
              public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List2Page');
  }


  ShowMe() {
    this.navCtrl.push(Maps2Page);
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

}
