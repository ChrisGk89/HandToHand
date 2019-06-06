import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MapsPage} from "../maps/maps";


@Component({
  selector: 'page-details4-user',
  templateUrl: 'details4-user.html',
})
export class Details4UserPage {

  validations_form4: FormGroup;
  image4: any;
  item4: any;
  loading4: any;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController
  ) {
    this.loading4 = this.loadingCtrl.create();
  }

  ionViewWillLoad(){
    this.getData4()
  }

  getData4(){
    this.item4 = this.navParams.get('data4');
    this.image4 = this.item4.image4;
    this.validations_form4 = this.formBuilder.group({
      fullname4: new FormControl(this.item4.fullname4, Validators.required),
      title4: new FormControl(this.item4.title4, Validators.required),
      description4: new FormControl(this.item4.description4, Validators.required)
    });
  }

  openMap(){
    this.navCtrl.push(MapsPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
