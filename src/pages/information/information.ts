import { Component } from '@angular/core';
import { App, NavController, NavParams, Platform, AlertController, ViewController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { AuthService } from '../services/auth.service';
import { Info1Page } from "../info1/info1";
import { Info2Page } from "../info2/info2";
import { Info3Page } from "../info3/info3";
import { Info4Page } from "../info4/info4";

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {


  constructor(
    public platform: Platform,
    private app: App,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
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


  info1(){
    this.navCtrl.push(Info1Page);
  }

  info2(){
    this.navCtrl.push(Info2Page);
  }

  info3(){
    this.navCtrl.push(Info3Page);
  }

  info4(){
    this.navCtrl.push(Info4Page);
  }



  dismiss() {
    this.viewCtrl.dismiss();
  }


}
