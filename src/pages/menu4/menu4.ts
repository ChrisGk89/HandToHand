import { Component } from '@angular/core';
import {NavController, ModalController, App, AlertController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewPostModal4Page } from '../new-post-modal4/new-post-modal4';
import { Details4Page } from '../details4/details4';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-menu4',
  templateUrl: 'menu4.html'
})

export class Menu4Page {

  items: Array<any>;

  constructor(
    private app: App,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ionViewWillEnter(){
    this.getData4();
  }

  getData4(){
    this.firebaseService.getJob()
      .then(tasks4 => {
        this.items = tasks4;
      })
  }

  viewDetails4(id, item4){
    // debugger
    let data4 = {
      fullname4: item4.fullname4,
      title4: item4.title4,
      description4: item4.description4,
      image4: item4.image4,
      id4: id
    }
    this.navCtrl.push(Details4Page, {
      data4: data4
    })
  }

  openNewUserModal4(){
    let modal4 = this.modalCtrl.create(NewPostModal4Page);
    modal4.onDidDismiss(data4 => {
      this.getData4();
    });
    modal4.present();
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

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
