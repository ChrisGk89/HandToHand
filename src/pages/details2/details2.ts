import { Component } from '@angular/core';
import { ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-details2',
  templateUrl: 'details2.html'
})
export class Details2Page {

  validations_form2: FormGroup;
  image2: any;
  item2: any;
  loading2: any;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private imagePicker2: ImagePicker,
    private firebaseService: FirebaseService,
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(value2){
    let data2 = {
      fullname2:value2.fullname2,
      title2: value2.title2,
      description2: value2.description2,
      image2: this.image2
    }
    this.firebaseService.updateBorrow(this.item2.id2,data2)
      .then(
        res => {
          this.viewCtrl.dismiss();
        }
      )
  }

  delete2() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to delete ' + this.item2.title2 + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseService.deleteBorrow(this.item2.id2)
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

  openImagePicker2(){
    this.imagePicker2.hasReadPermission()
      .then((result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker2.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker2.getPictures({
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

  uploadImageToFirebase(image2){
    this.loading2.present();
    image2 = normalizeURL(image2);
    let randomId = Math.random().toString(36).substr(2, 5);
    console.log(randomId);

    //uploads img to firebase storage
    this.firebaseService.uploadImage2(image2, randomId)
      .then(photoURL => {
        this.image2 = photoURL;
        this.loading2.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Image was updated successfully',
          duration: 3000
        });
        toast.present();
      })
  }

}
