import { Component } from '@angular/core';
import {NavController, ModalController, App, AlertController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewPostModal2Page } from '../new-post-modal2/new-post-modal2';
import { Details2Page } from '../details2/details2';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-menu2',
  templateUrl: 'menu2.html'
})

export class Menu2Page {

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
    this.getData2();
  }

  getData2(){
    this.firebaseService.getBorrows()
      .then(tasks2 => {
        this.items = tasks2;
      })
  }

  viewDetails2(id, item2){
    // debugger
    let data2 = {
      fullname2: item2.fullname2,
      title2: item2.title2,
      description2: item2.description2,
      image2: item2.image2,
      id2: id
    }
    this.navCtrl.push(Details2Page, {
      data2: data2
    })
  }

  openNewUserModal2(){
    let modal2 = this.modalCtrl.create(NewPostModal2Page);
    modal2.onDidDismiss(data2 => {
      this.getData2();
    });
    modal2.present();
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
