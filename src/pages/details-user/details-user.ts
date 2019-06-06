import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MapsPage} from "../maps/maps";


@Component({
  selector: 'page-details-user',
  templateUrl: 'details-user.html',
})
export class DetailsUserPage {

  validations_form: FormGroup;
  image: any;
  item: any;
  loading: any;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewWillLoad(){
    this.getData()
  }

  getData(){
    this.item = this.navParams.get('data');
    this.image = this.item.image;
    this.validations_form = this.formBuilder.group({
      fullname: new FormControl(this.item.fullname, Validators.required),
      title: new FormControl(this.item.title, Validators.required),
      description: new FormControl(this.item.description, Validators.required)
    });
  }

  openMap(){
    this.navCtrl.push(MapsPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
