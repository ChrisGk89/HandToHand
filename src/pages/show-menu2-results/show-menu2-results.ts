import { Component } from '@angular/core';
import {AlertController, App, NavController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { LoginPage } from '../login/login';
import 'firebase/storage';
import {Details2UserPage} from "../details2-user/details2-user";


@Component({
  selector: 'page-show-menu2-results',
  templateUrl: 'show-menu2-results.html',
})
export class ShowMenu2ResultsPage {

  public borrow: Array<any>;
  public borrow2: Array<any>;
  public borrow3: Array<any>;
  public borrow4: Array<any>;
  public borrow5: Array<any>;
  public borrow6: Array<any>;
  public borrow7: Array<any>;
  public borrow8: Array<any>;
  public borrow9: Array<any>;
  public borrow10: Array<any>;
  public borrow11: Array<any>;
  public borrow12: Array<any>;
  public borrow13: Array<any>;
  public borrow14: Array<any>;
  public borrow15: Array<any>;
  public borrow16: Array<any>;
  public borrow17: Array<any>;
  public borrow18: Array<any>;
  public borrow19: Array<any>;
  public borrow20: Array<any>;
  public borrow21: Array<any>;
  public borrow22: Array<any>;
  public borrow23: Array<any>;
  public borrow24: Array<any>;
  public borrow25: Array<any>;
  public borrow26: Array<any>;
  public borrow27: Array<any>;
  public borrow28: Array<any>;
  public borrow29: Array<any>;
  public borrow30: Array<any>;
  public borrow31: Array<any>;
  public borrow32: Array<any>;



  public users: Array<any>;


  constructor(
    private app: App,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private firebaseService: FirebaseService,
  ) {}

  ionViewWillEnter() {
    this.getborrow()
    this.getborrow2()
    this.getborrow3()
    this.getborrow4()
    this.getborrow5()
    this.getborrow6()
    this.getborrow7()
    this.getborrow8()
    this.getborrow9()
    this.getborrow10()
    this.getborrow11()
    this.getborrow12()
    this.getborrow13()
    this.getborrow14()
    this.getborrow15()
    this.getborrow16()
    this.getborrow17()
    this.getborrow18()
    this.getborrow19()
    this.getborrow20()
    this.getborrow21()
    this.getborrow22()
    this.getborrow23()
    this.getborrow24()
    this.getborrow25()
    this.getborrow26()
    this.getborrow27()
    this.getborrow28()
    this.getborrow29()
    this.getborrow30()
    this.getborrow31()
    this.getborrow32()



  }

  getusers(){
    this.firebaseService.getUsers()
      .then(users=>{
        this.users = users;
      })
  }

  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////

  getborrow(){
    this.firebaseService.getBorrow()
      .then(tasks2 => {
        this.borrow = tasks2;
      })
  }

  getborrow2(){
    this.firebaseService.getBorrow2()
      .then(tasks2 => {
        this.borrow2 = tasks2;
      })
  }

  getborrow3(){
    this.firebaseService.getBorrow3()
      .then(tasks2 => {
        this.borrow3 = tasks2;
      })
  }

  getborrow4(){
    this.firebaseService.getBorrow4()
      .then(tasks2 => {
        this.borrow4 = tasks2;
      })
  }


  getborrow5(){
    this.firebaseService.getBorrow5()
      .then(tasks2 => {
        this.borrow5 = tasks2;
      })
  }


  getborrow6(){
    this.firebaseService.getBorrow6()
      .then(tasks2 => {
        this.borrow6 = tasks2;
      })
  }


  getborrow7(){
    this.firebaseService.getBorrow7()
      .then(tasks2 => {
        this.borrow7 = tasks2;
      })
  }

  getborrow8(){
    this.firebaseService.getBorrow8()
      .then(tasks2 => {
        this.borrow8 = tasks2;
      })
  }

  getborrow9(){
    this.firebaseService.getBorrow9()
      .then(tasks2 => {
        this.borrow9 = tasks2;
      })
  }

  getborrow10(){
    this.firebaseService.getBorrow10()
      .then(tasks2 => {
        this.borrow10 = tasks2;
      })
  }

  getborrow11(){
    this.firebaseService.getBorrow11()
      .then(tasks2 => {
        this.borrow11 = tasks2;
      })
  }

  getborrow12(){
    this.firebaseService.getBorrow12()
      .then(tasks2 => {
        this.borrow12 = tasks2;
      })
  }

  getborrow13(){
    this.firebaseService.getBorrow13()
      .then(tasks2 => {
        this.borrow13 = tasks2;
      })
  }

  getborrow14(){
    this.firebaseService.getBorrow14()
      .then(tasks2 => {
        this.borrow14 = tasks2;
      })
  }

  getborrow15(){
    this.firebaseService.getBorrow15()
      .then(tasks2 => {
        this.borrow15 = tasks2;
      })
  }

  getborrow16(){
    this.firebaseService.getBorrow16()
      .then(tasks2 => {
        this.borrow16 = tasks2;
      })
  }


  getborrow17(){
    this.firebaseService.getBorrow17()
      .then(tasks2 => {
        this.borrow17 = tasks2;
      })
  }

  getborrow18(){
    this.firebaseService.getBorrow18()
      .then(tasks2 => {
        this.borrow18 = tasks2;
      })
  }


  getborrow19(){
    this.firebaseService.getBorrow19()
      .then(tasks2 => {
        this.borrow19 = tasks2;
      })
  }

  getborrow20(){
    this.firebaseService.getBorrow20()
      .then(tasks2 => {
        this.borrow20 = tasks2;
      })
  }

  getborrow21(){
    this.firebaseService.getBorrow21()
      .then(tasks2 => {
        this.borrow21 = tasks2;
      })
  }

  getborrow22(){
    this.firebaseService.getBorrow22()
      .then(tasks2 => {
        this.borrow22 = tasks2;
      })
  }



  getborrow23(){
    this.firebaseService.getBorrow23()
      .then(tasks2 => {
        this.borrow23 = tasks2;
      })
  }


  getborrow24(){
    this.firebaseService.getBorrow24()
      .then(tasks2 => {
        this.borrow24 = tasks2;
      })
  }


  getborrow25(){
    this.firebaseService.getBorrow25()
      .then(tasks2 => {
        this.borrow25 = tasks2;
      })
  }

  getborrow26(){
    this.firebaseService.getBorrow26()
      .then(tasks2 => {
        this.borrow26 = tasks2;
      })
  }

  getborrow27(){
    this.firebaseService.getBorrow27()
      .then(tasks2 => {
        this.borrow27 = tasks2;
      })
  }

  getborrow28() {
    this.firebaseService.getBorrow28()
      .then(tasks2 => {
        this.borrow28 = tasks2;
      })
  }


  getborrow29(){
    this.firebaseService.getBorrow29()
      .then(tasks2 => {
        this.borrow29 = tasks2;
      })
  }

  getborrow30(){
    this.firebaseService.getBorrow30()
      .then(tasks2 => {
        this.borrow30 = tasks2;
      })
  }

  getborrow31(){
    this.firebaseService.getBorrow30()
      .then(tasks2 => {
        this.borrow31 = tasks2;
      })
  }

  getborrow32(){
    this.firebaseService.getBorrow30()
      .then(tasks2 => {
        this.borrow32 = tasks2;
      })
  }


  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////


  viewDetails2(id, item2){
    // debugger
    let data2 = {
      fullname2: item2.fullname2,
      title2: item2.title2,
      description2: item2.description2,
      image2: item2.image2,
      id2: id
    }
    this.navCtrl.push(Details2UserPage, {
      data2: data2
    })
  }


  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////


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
