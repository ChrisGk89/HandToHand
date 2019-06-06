import { Component } from '@angular/core';
import {NavController, App, AlertController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { LoginPage } from '../login/login';
import 'firebase/storage';
//import {DetailsPage} from "../details/details";
import {DetailsUserPage} from "../details-user/details-user";


@Component({
  selector: 'page-show-menu-results',
  templateUrl: 'show-menu-results.html',
})
export class ShowMenuResultsPage {

  public donations: Array<any>;
  public donations2: Array<any>;
  public donations3: Array<any>;
  public donations4: Array<any>;
  public donations5: Array<any>;
  public donations6: Array<any>;
  public donations7: Array<any>;
  public donations8: Array<any>;
  public donations9: Array<any>;
  public donations10: Array<any>;
  public donations11: Array<any>;
  public donations12: Array<any>;
  public donations13: Array<any>;
  public donations14: Array<any>;
  public donations15: Array<any>;
  public donations16: Array<any>;
  public donations17: Array<any>;
  public donations18: Array<any>;
  public donations19: Array<any>;
  public donations20: Array<any>;
  public donations21: Array<any>;
  public donations22: Array<any>;
  public donations23: Array<any>;
  public donations24: Array<any>;
  public donations25: Array<any>;
  public donations26: Array<any>;
  public donations27: Array<any>;
  public donations28: Array<any>;
  public donations29: Array<any>;
  public donations30: Array<any>;
  public donations31: Array<any>;
  public donations32: Array<any>;






  constructor(
    private app: App,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private firebaseService: FirebaseService,
  ) {}

  ionViewWillEnter() {
    this.getdonations()
    this.getdonations2()
    this.getdonations3()
    this.getdonations4()
    this.getdonations5()
    this.getdonations6()
    this.getdonations7()
    this.getdonations8()
    this.getdonations9()
    this.getdonations10()
    this.getdonations11()
    this.getdonations12()
    this.getdonations13()
    this.getdonations14()
    this.getdonations15()
    this.getdonations16()
    this.getdonations17()
    this.getdonations18()
    this.getdonations19()
    this.getdonations20()
    this.getdonations21()
    this.getdonations22()
    this.getdonations23()
    this.getdonations24()
    this.getdonations25()
    this.getdonations26()
    this.getdonations27()
    this.getdonations28()
    this.getdonations29()
    this.getdonations30()
    this.getdonations31()
    this.getdonations32()


  }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  getdonations(){
    this.firebaseService.getDonations()
      .then(tasks => {
        this.donations = tasks;
      })
  }

  getdonations2(){
    this.firebaseService.getDonations2()
      .then(tasks => {
        this.donations2 = tasks;
      })
  }

  getdonations3(){
    this.firebaseService.getDonations3()
      .then(tasks => {
        this.donations3 = tasks;
      })
  }


  getdonations4(){
    this.firebaseService.getDonations4()
      .then(tasks => {
        this.donations4 = tasks;
      })
  }


  getdonations5(){
    this.firebaseService.getDonations5()
      .then(tasks => {
        this.donations5 = tasks;
      })
  }


  getdonations6(){
    this.firebaseService.getDonations6()
      .then(tasks => {
        this.donations6 = tasks;
      })
  }


  getdonations7(){
    this.firebaseService.getDonations7()
      .then(tasks => {
        this.donations7 = tasks;
      })
  }

  getdonations8(){
    this.firebaseService.getDonations8()
      .then(tasks => {
        this.donations8 = tasks;
      })
  }

  getdonations9(){
    this.firebaseService.getDonations9()
      .then(tasks => {
        this.donations9 = tasks;
      })
  }

  getdonations10(){
    this.firebaseService.getDonations10()
      .then(tasks => {
        this.donations10 = tasks;
      })
  }

  getdonations11(){
    this.firebaseService.getDonations11()
      .then(tasks => {
        this.donations11 = tasks;
      })
  }

  getdonations12(){
    this.firebaseService.getDonations12()
      .then(tasks => {
        this.donations12 = tasks;
      })
  }

  getdonations13(){
    this.firebaseService.getDonations13()
      .then(tasks => {
        this.donations13 = tasks;
      })
  }

  getdonations14(){
    this.firebaseService.getDonations14()
      .then(tasks => {
        this.donations14 = tasks;
      })
  }

  getdonations15(){
    this.firebaseService.getDonations15()
      .then(tasks => {
        this.donations15 = tasks;
      })
  }

  getdonations16(){
    this.firebaseService.getDonations16()
      .then(tasks => {
        this.donations16  = tasks;
      })
  }

  getdonations17(){
    this.firebaseService.getDonations17()
      .then(tasks => {
        this.donations17 = tasks;
      })
  }

  getdonations18(){
    this.firebaseService.getDonations18()
      .then(tasks => {
        this.donations18 = tasks;
      })
  }


  getdonations19(){
    this.firebaseService.getDonations19()
      .then(tasks => {
        this.donations19 = tasks;
      })
  }

  getdonations20(){
    this.firebaseService.getDonations20()
      .then(tasks => {
        this.donations20 = tasks;
      })
  }

  getdonations21(){
    this.firebaseService.getDonations21()
      .then(tasks => {
        this.donations21 = tasks;
      })
  }

  getdonations22(){
    this.firebaseService.getDonations22()
      .then(tasks => {
        this.donations22 = tasks;
      })
  }


  getdonations23(){
    this.firebaseService.getDonations23()
      .then(tasks => {
        this.donations23 = tasks;
      })
  }

  getdonations24(){
    this.firebaseService.getDonations24()
      .then(tasks => {
        this.donations24 = tasks;
      })
  }


  getdonations25(){
    this.firebaseService.getDonations25()
      .then(tasks => {
        this.donations25 = tasks;
      })
  }

  getdonations26(){
    this.firebaseService.getDonations26()
      .then(tasks => {
        this.donations26 = tasks;
      })
  }


  getdonations27(){
    this.firebaseService.getDonations27()
      .then(tasks => {
        this.donations27 = tasks;
      })
  }

  getdonations28(){
    this.firebaseService.getDonations28()
      .then(tasks => {
        this.donations28 = tasks;
      })
  }


  getdonations29(){
    this.firebaseService.getDonations29()
      .then(tasks => {
        this.donations29 = tasks;
      })
  }

  getdonations30(){
    this.firebaseService.getDonations30()
      .then(tasks => {
        this.donations30 = tasks;
      })
  }

  getdonations31(){
    this.firebaseService.getDonations30()
      .then(tasks => {
        this.donations30 = tasks;
      })
  }

  getdonations32(){
    this.firebaseService.getDonations30()
      .then(tasks => {
        this.donations30 = tasks;
      })
  }




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////


  viewDetails(id, item){
    // debugger
    let data = {
      fullname: item.fullname,
      title: item.title,
      description: item.description,
      image: item.image,
      id: id
    }
    this.navCtrl.push(DetailsUserPage, {
      data: data
    })
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
