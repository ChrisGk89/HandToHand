import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MapsPage} from "../maps/maps";


@Component({
  selector: 'page-details2-user',
  templateUrl: 'details2-user.html',
})
export class Details2UserPage {

  validations_form2: FormGroup;
  image2: any;
  item2: any;
  loading2: any;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController
  ) {
    this.loading2 = this.loadingCtrl.create();
  }

  ionViewWillLoad(){
    this.getData2()
  }

  getData2(){
    this.item2 = this.navParams.get('data2');
    this.image2 = this.item2.image2;
    this.validations_form2 = this.formBuilder.group({
      fullname2: new FormControl(this.item2.fullname2, Validators.required),
      title2: new FormControl(this.item2.title2, Validators.required),
      description2: new FormControl(this.item2.description2, Validators.required)
    });
  }

  openMap(){
    this.navCtrl.push(MapsPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
