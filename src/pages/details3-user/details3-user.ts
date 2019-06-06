import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MapsPage} from "../maps/maps";



@Component({
  selector: 'page-details3-user',
  templateUrl: 'details3-user.html',
})
export class Details3UserPage {

  validations_form3: FormGroup;
  image3: any;
  item3: any;
  loading3: any;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController
  ) {
    this.loading3 = this.loadingCtrl.create();
  }

  ionViewWillLoad(){
    this.getData3()
  }

  getData3(){
    this.item3 = this.navParams.get('data3');
    this.image3 = this.item3.image3;
    this.validations_form3 = this.formBuilder.group({
      fullname3: new FormControl(this.item3.fullname3, Validators.required),
      title3: new FormControl(this.item3.title3, Validators.required),
      description3: new FormControl(this.item3.description3, Validators.required)
    });
  }

  openMap(){
    this.navCtrl.push(MapsPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
