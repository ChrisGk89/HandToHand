import { Component } from '@angular/core';
import { ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-details3',
  templateUrl: 'details3.html'
})
export class Details3Page {

  validations_form3: FormGroup;
  image3: any;
  item3: any;
  loading3: any;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private imagePicker3: ImagePicker,
    private firebaseService: FirebaseService,
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
      fullname3: new FormControl(this.item3.fullname, Validators.required),
      title3: new FormControl(this.item3.title3, Validators.required),
      description3: new FormControl(this.item3.description3, Validators.required)
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(value3){
    let data3 = {
      fullname3: value3.fullname3,
      title3: value3.title3,
      description3: value3.description3,
      image3: this.image3
    }
    this.firebaseService.updateSale(this.item3.id3,data3)
      .then(
        res => {
          this.viewCtrl.dismiss();
        }
      )
  }

  delete3() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to delete ' + this.item3.title3 + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseService.deleteSale(this.item3.id3)
              .then(
                res => this.viewCtrl.dismiss(),
                err => console.log(err)
              )
          }
        }
      ]
    });
    confirm.present();
  }

  openImagePicker3(){
    this.imagePicker3.hasReadPermission()
      .then((result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker3.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker3.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.uploadImageToFirebase(results[i]);
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }

  uploadImageToFirebase(image3){
    this.loading3.present();
    image3 = normalizeURL(image3);
    let randomId = Math.random().toString(36).substr(2, 5);
    console.log(randomId);

    //uploads img to firebase storage
    this.firebaseService.uploadImage3(image3, randomId)
      .then(photoURL => {
        this.image3 = photoURL;
        this.loading3.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Image was updated successfully',
          duration: 3000
        });
        toast.present();
      })
  }

}
