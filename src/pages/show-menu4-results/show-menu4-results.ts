import { Component } from '@angular/core';
import {AlertController, App, NavController, ViewController} from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { LoginPage } from '../login/login';
import 'firebase/storage';
//import {DetailsUserPage} from "../details-user/details-user";
import {Details4UserPage} from "../details4-user/details4-user";



@Component({
  selector: 'page-show-menu4-results',
  templateUrl: 'show-menu4-results.html',
})
export class ShowMenu4ResultsPage {

  public jobs: Array<any>;
  public jobs2: Array<any>;
  public jobs3: Array<any>;
  public jobs4: Array<any>;
  public jobs5: Array<any>;
  public jobs6: Array<any>;
  public jobs7: Array<any>;
  public jobs8: Array<any>;
  public jobs9: Array<any>;
  public jobs10: Array<any>;
  public jobs11: Array<any>;
  public jobs12: Array<any>;
  public jobs13: Array<any>;
  public jobs14: Array<any>;
  public jobs15: Array<any>;
  public jobs16: Array<any>;
  public jobs17: Array<any>;
  public jobs18: Array<any>;
  public jobs19: Array<any>;
  public jobs20: Array<any>;
  public jobs21: Array<any>;
  public jobs22: Array<any>;
  public jobs23: Array<any>;
  public jobs24: Array<any>;
  public jobs25: Array<any>;
  public jobs26: Array<any>;
  public jobs27: Array<any>;
  public jobs28: Array<any>;
  public jobs29: Array<any>;
  public jobs30: Array<any>;
  public jobs31: Array<any>;
  public jobs32: Array<any>;



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
    this.getjobs()
    this.getjobs2()
    this.getjobs3()
    this.getjobs4()
    this.getjobs5()
    this.getjobs6()
    this.getjobs7()
    this.getjobs8()
    this.getjobs9()
    this.getjobs10()
    this.getjobs11()
    this.getjobs12()
    this.getjobs13()
    this.getjobs14()
    this.getjobs15()
    this.getjobs16()
    this.getjobs17()
    this.getjobs18()
    this.getjobs19()
    this.getjobs20()
    this.getjobs21()
    this.getjobs22()
    this.getjobs23()
    this.getjobs24()
    this.getjobs25()
    this.getjobs26()
    this.getjobs27()
    this.getjobs28()
    this.getjobs29()
    this.getjobs30()
    this.getjobs31()
    this.getjobs32()


  }


  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////


  getusers(){
    this.firebaseService.getUsers()
      .then(users=>{
        this.users = users;
      })
  }

  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////

  getjobs(){
    this.firebaseService.getJobs()
      .then(tasks4 => {
        this.jobs = tasks4;
      })
  }

  getjobs2(){
    this.firebaseService.getJobs2()
      .then(tasks4 => {
        this.jobs2 = tasks4;
      })
  }

  getjobs3(){
    this.firebaseService.getJobs3()
      .then(tasks4 => {
        this.jobs3 = tasks4;
      })
  }


  getjobs4(){
    this.firebaseService.getJobs4()
      .then(tasks4 => {
        this.jobs4 = tasks4;
      })
  }

  getjobs5(){
    this.firebaseService.getJobs5()
      .then(tasks4 => {
        this.jobs5 = tasks4;
      })
  }


  getjobs6(){
    this.firebaseService.getJobs6()
      .then(tasks4 => {
        this.jobs6 = tasks4;
      })
  }


  getjobs7(){
    this.firebaseService.getJobs7()
      .then(tasks4 => {
        this.jobs7 = tasks4;
      })
  }

  getjobs8(){
    this.firebaseService.getJobs8()
      .then(tasks4 => {
        this.jobs8 = tasks4;
      })
  }

  getjobs9(){
    this.firebaseService.getJobs9()
      .then(tasks4 => {
        this.jobs9 = tasks4;
      })
  }

  getjobs10(){
    this.firebaseService.getJobs10()
      .then(tasks4 => {
        this.jobs10 = tasks4;
      })
  }

  getjobs11(){
    this.firebaseService.getJobs11()
      .then(tasks4 => {
        this.jobs11 = tasks4;
      })
  }

  getjobs12(){
    this.firebaseService.getJobs12()
      .then(tasks4 => {
        this.jobs12 = tasks4;
      })
  }

  getjobs13(){
    this.firebaseService.getJobs13()
      .then(tasks4 => {
        this.jobs13 = tasks4;
      })
  }

  getjobs14(){
    this.firebaseService.getJobs14()
      .then(tasks4 => {
        this.jobs14 = tasks4;
      })
  }

  getjobs15(){
    this.firebaseService.getJobs15()
      .then(tasks4 => {
        this.jobs15 = tasks4;
      })
  }


  getjobs16(){
    this.firebaseService.getJobs16()
      .then(tasks4 => {
        this.jobs16 = tasks4;
      })
  }

  getjobs17(){
    this.firebaseService.getJobs17()
      .then(tasks4 => {
        this.jobs17 = tasks4;
      })
  }

  getjobs18(){
    this.firebaseService.getJobs18()
      .then(tasks4 => {
        this.jobs18 = tasks4;
      })
  }


  getjobs19(){
    this.firebaseService.getJobs19()
      .then(tasks4 => {
        this.jobs19 = tasks4;
      })
  }

  getjobs20(){
    this.firebaseService.getJobs20()
      .then(tasks4 => {
        this.jobs20 = tasks4;
      })
  }

  getjobs21(){
    this.firebaseService.getJobs21()
      .then(tasks4 => {
        this.jobs21 = tasks4;
      })
  }

  getjobs22(){
    this.firebaseService.getJobs22()
      .then(tasks4 => {
        this.jobs22 = tasks4;
      })
  }


  getjobs23(){
    this.firebaseService.getJobs23()
      .then(tasks4 => {
        this.jobs23 = tasks4;
      })
  }

  getjobs24(){
    this.firebaseService.getJobs24()
      .then(tasks4 => {
        this.jobs24 = tasks4;
      })
  }


  getjobs25(){
    this.firebaseService.getJobs25()
      .then(tasks4 => {
        this.jobs25 = tasks4;
      })
  }

  getjobs26(){
    this.firebaseService.getJobs26()
      .then(tasks4 => {
        this.jobs26 = tasks4;
      })
  }


  getjobs27(){
    this.firebaseService.getJobs27()
      .then(tasks4 => {
        this.jobs27 = tasks4;
      })
  }

  getjobs28(){
    this.firebaseService.getJobs28()
      .then(tasks4 => {
        this.jobs28 = tasks4;
      })
  }


  getjobs29(){
    this.firebaseService.getJobs29()
      .then(tasks4 => {
        this.jobs29 = tasks4;
      })
  }

  getjobs30(){
    this.firebaseService.getJobs30()
      .then(tasks4 => {
        this.jobs30 = tasks4;
      })
  }


  getjobs31(){
    this.firebaseService.getJobs30()
      .then(tasks4 => {
        this.jobs30 = tasks4;
      })
  }


  getjobs32(){
    this.firebaseService.getJobs30()
      .then(tasks4 => {
        this.jobs30 = tasks4;
      })
  }



  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////


  viewDetails4(id, item4){
    // debugger
    let data4 = {
      fullname4: item4.fullname4,
      title4: item4.title4,
      description4: item4.description4,
      image4: item4.image4,
      id4: id
    }
    this.navCtrl.push(Details4UserPage, {
      data4: data4
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
