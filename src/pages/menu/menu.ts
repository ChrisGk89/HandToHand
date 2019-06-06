import { Component } from '@angular/core';
import {NavController, ModalController, App, AlertController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewPostModalPage } from '../new-post-modal/new-post-modal';
import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

  items: Array<any>;

  constructor(
    private app: App,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getDonation()
    .then(tasks => {
      this.items = tasks;
    })
  }

  viewDetails(id, item){
    // debugger
    let data = {
      fullname: item.fullname,
      title: item.title,
      description: item.description,
      image: item.image,
      id: id
    }
    this.navCtrl.push(DetailsPage, {
      data: data
    })
  }

  openNewUserModal(){
    let modal = this.modalCtrl.create(NewPostModalPage);
    modal.onDidDismiss(data => {
      this.getData();
    });
    modal.present();
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
