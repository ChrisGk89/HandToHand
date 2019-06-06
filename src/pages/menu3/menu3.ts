import { Component } from '@angular/core';
import {NavController, ModalController, App, AlertController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewPostModal3Page } from '../new-post-modal3/new-post-modal3';
import { Details3Page } from '../details3/details3';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-menu3',
  templateUrl: 'menu3.html'
})

export class Menu3Page {

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
    this.getData3();
  }

  getData3(){
    this.firebaseService.getSale()
      .then(tasks3 => {
        this.items = tasks3;
      })
  }

  viewDetails3(id, item3){
    // debugger
    let data3 = {
      fullname3: item3.fullname3,
      title3: item3.title3,
      description3: item3.description3,
      image3: item3.image3,
      id3: id
    }
    this.navCtrl.push(Details3Page, {
      data3: data3
    })
  }

  openNewUserModal3(){
    let modal3 = this.modalCtrl.create(NewPostModal3Page);
    modal3.onDidDismiss(data3 => {
      this.getData3();
    });
    modal3.present();
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
