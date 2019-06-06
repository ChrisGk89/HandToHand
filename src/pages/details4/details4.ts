import { Component } from '@angular/core';
import { ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-details4',
  templateUrl: 'details4.html'
})
export class Details4Page {

  validations_form4: FormGroup;
  image4: any;
  item4: any;
  loading4: any;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private imagePicker4: ImagePicker,
    private firebaseService: FirebaseService,
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(value4){
    let data4 = {
      title4: value4.title4,
      description4: value4.description4,
      image4: this.image4
    }
    this.firebaseService.updateJob(this.item4.id4,data4)
      .then(
        res => {
          this.viewCtrl.dismiss();
        }
      )
  }

  delete4() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to delete ' + this.item4.title4 + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseService.deleteJob(this.item4.id4)
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

  openImagePicker4(){
    this.imagePicker4.hasReadPermission()
      .then((result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker4.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker4.getPictures({
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

  uploadImageToFirebase(image4){
    this.loading4.present();
    image4 = normalizeURL(image4);
    let randomId = Math.random().toString(36).substr(2, 5);
    console.log(randomId);

    //uploads img to firebase storage
    this.firebaseService.uploadImage4(image4, randomId)
      .then(photoURL => {
        this.image4 = photoURL;
        this.loading4.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Image was updated successfully',
          duration: 3000
        });
        toast.present();
      })
  }

}
