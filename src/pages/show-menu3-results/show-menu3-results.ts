import { Component } from '@angular/core';
import {AlertController, App, NavController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { LoginPage } from '../login/login';
import 'firebase/storage';
import {Details3UserPage} from "../details3-user/details3-user";


@Component({
  selector: 'page-show-menu3-results',
  templateUrl: 'show-menu3-results.html',
})
export class ShowMenu3ResultsPage {

  public sales: Array<any>;
  public sales2: Array<any>;
  public sales3: Array<any>;
  public sales4: Array<any>;
  public sales5: Array<any>;
  public sales6: Array<any>;
  public sales7: Array<any>;
  public sales8: Array<any>;
  public sales9: Array<any>;
  public sales10: Array<any>;
  public sales11: Array<any>;
  public sales12: Array<any>;
  public sales13: Array<any>;
  public sales14: Array<any>;
  public sales15: Array<any>;
  public sales16: Array<any>;
  public sales17: Array<any>;
  public sales18: Array<any>;
  public sales19: Array<any>;
  public sales20: Array<any>;
  public sales21: Array<any>;
  public sales22: Array<any>;
  public sales23: Array<any>;
  public sales24: Array<any>;
  public sales25: Array<any>;
  public sales26: Array<any>;
  public sales27: Array<any>;
  public sales28: Array<any>;
  public sales29: Array<any>;
  public sales30: Array<any>;
  public sales31: Array<any>;
  public sales32: Array<any>;


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
    this.getsales()
    this.getsales2()
    this.getsales3()
    this.getsales4()
    this.getsales5()
    this.getsales6()
    this.getsales7()
    this.getsales8()
    this.getsales9()
    this.getsales10()
    this.getsales11()
    this.getsales12()
    this.getsales13()
    this.getsales14()
    this.getsales15()
    this.getsales16()
    this.getsales17()
    this.getsales18()
    this.getsales19()
    this.getsales20()
    this.getsales21()
    this.getsales22()
    this.getsales23()
    this.getsales24()
    this.getsales25()
    this.getsales26()
    this.getsales27()
    this.getsales28()
    this.getsales29()
    this.getsales30()
    this.getsales31()
    this.getsales32()



  }

  getusers(){
    this.firebaseService.getUsers()
      .then(users=>{
        this.users = users;
      })
  }


  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////


  getsales(){
    this.firebaseService.getSales()
      .then(tasks3 => {
        this.sales = tasks3;
      })
  }

  getsales2(){
    this.firebaseService.getSales2()
      .then(tasks3 => {
        this.sales2 = tasks3;
      })
  }

  getsales3(){
    this.firebaseService.getSales3()
      .then(tasks3 => {
        this.sales3 = tasks3;
      })
  }

  getsales4(){
    this.firebaseService.getSales4()
      .then(tasks3 => {
        this.sales4 = tasks3;
      })
  }

  getsales5(){
    this.firebaseService.getSales5()
      .then(tasks3 => {
        this.sales5 = tasks3;
      })
  }

  getsales6(){
    this.firebaseService.getSales6()
      .then(tasks3 => {
        this.sales6 = tasks3;
      })
  }


  getsales7(){
    this.firebaseService.getSales7()
      .then(tasks3 => {
        this.sales7 = tasks3;
      })
  }

  getsales8(){
    this.firebaseService.getSales8()
      .then(tasks3 => {
        this.sales8 = tasks3;
      })
  }

  getsales9(){
    this.firebaseService.getSales9()
      .then(tasks3 => {
        this.sales9 = tasks3;
      })
  }

  getsales10(){
    this.firebaseService.getSales10()
      .then(tasks3 => {
        this.sales10 = tasks3;
      })
  }

  getsales11(){
    this.firebaseService.getSales11()
      .then(tasks3 => {
        this.sales11 = tasks3;
      })
  }

  getsales12(){
    this.firebaseService.getSales12()
      .then(tasks3 => {
        this.sales12 = tasks3;
      })
  }

  getsales13(){
    this.firebaseService.getSales13()
      .then(tasks3 => {
        this.sales13 = tasks3;
      })
  }

  getsales14(){
    this.firebaseService.getSales14()
      .then(tasks3 => {
        this.sales14 = tasks3;
      })
  }

  getsales15(){
    this.firebaseService.getSales15()
      .then(tasks3 => {
        this.sales15 = tasks3;
      })
  }


  getsales16(){
    this.firebaseService.getSales16()
      .then(tasks3 => {
        this.sales16 = tasks3;
      })
  }


  getsales17(){
    this.firebaseService.getSales17()
      .then(tasks3 => {
        this.sales17 = tasks3;
      })
  }

  getsales18(){
    this.firebaseService.getSales18()
      .then(tasks3 => {
        this.sales18 = tasks3;
      })
  }


  getsales19(){
    this.firebaseService.getSales19()
      .then(tasks3 => {
        this.sales19 = tasks3;
      })
  }

  getsales20(){
    this.firebaseService.getSales20()
      .then(tasks3 => {
        this.sales20 = tasks3;
      })
  }

  getsales21(){
    this.firebaseService.getSales21()
      .then(tasks3 => {
        this.sales21 = tasks3;
      })
  }

  getsales22(){
    this.firebaseService.getSales22()
      .then(tasks3 => {
        this.sales22 = tasks3;
      })
  }


  getsales23(){
    this.firebaseService.getSales23()
      .then(tasks3 => {
        this.sales23 = tasks3;
      })
  }

  getsales24(){
    this.firebaseService.getSales24()
      .then(tasks3 => {
        this.sales24 = tasks3;
      })
  }


  getsales25(){
    this.firebaseService.getSales25()
      .then(tasks3 => {
        this.sales25 = tasks3;
      })
  }

  getsales26(){
    this.firebaseService.getSales26()
      .then(tasks3 => {
        this.sales26 = tasks3;
      })
  }


  getsales27(){
    this.firebaseService.getSales27()
      .then(tasks3 => {
        this.sales27 = tasks3;
      })
  }

  getsales28(){
    this.firebaseService.getSales28()
      .then(tasks3 => {
        this.sales28 = tasks3;
      })
  }


  getsales29(){
    this.firebaseService.getSales29()
      .then(tasks3 => {
        this.sales29 = tasks3;
      })
  }

  getsales30(){
    this.firebaseService.getSales30()
      .then(tasks3 => {
        this.sales30 = tasks3;
      })
  }

  getsales31(){
    this.firebaseService.getSales30()
      .then(tasks3 => {
        this.sales30 = tasks3;
      })
  }

  getsales32(){
    this.firebaseService.getSales30()
      .then(tasks3 => {
        this.sales30 = tasks3;
      })
  }



  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////


  viewDetails3(id, item3){
    // debugger
    let data3 = {
      fullname3: item3.fullname3,
      title3: item3.title3,
      description3: item3.description3,
      image3: item3.image3,
      id3: id
    }
    this.navCtrl.push(Details3UserPage, {
      data3: data3
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
