import { Component } from '@angular/core';
import {AlertController, App, NavController, NavParams} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import {LoginPage} from "../login/login";
import {ShowMenuResultsPage} from "../show-menu-results/show-menu-results";
import {ShowMenu2ResultsPage} from "../show-menu2-results/show-menu2-results";
import {ShowMenu3ResultsPage} from "../show-menu3-results/show-menu3-results";
import {ShowMenu4ResultsPage} from "../show-menu4-results/show-menu4-results";



@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {


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


  DonationPage() {
    this.navCtrl.push(ShowMenuResultsPage);
  }

  BorrowPage() {
    this.navCtrl.push(ShowMenu2ResultsPage);
  }

  SalesPage() {
    this.navCtrl.push(ShowMenu3ResultsPage);
  }

  JobsPage() {
    this.navCtrl.push(ShowMenu4ResultsPage);
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
