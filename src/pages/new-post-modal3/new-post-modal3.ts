import { Component } from '@angular/core';
import { ViewController, normalizeURL, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-new-task-modal3',
  templateUrl: 'new-post-modal3.html'
})
export class NewPostModal3Page {

  validations_form3: FormGroup;
  image3: any;
  loading3: any;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private imagePicker3: ImagePicker,
    private firebaseService: FirebaseService,
    private loadingCtrl3: LoadingController
  ) {
    this.loading3 = this.loadingCtrl3.create();
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    this.image3 = "./assets/imgs/default3.png";
    this.validations_form3 = this.formBuilder.group({
      title3: new FormControl('', Validators.required),
      description3: new FormControl('', Validators.required),
      fullname3: new FormControl('',Validators.required)

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
    this.firebaseService.createSale(data3)
      .then(
        res => {
          this.resetFields();
          this.viewCtrl.dismiss();
        }
      )
  }

  openImagePicker3(){
    this.imagePicker3.hasReadPermission()
      .then((result3) => {
        if(result3 == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker3.requestReadPermission();
        }
        else if(result3 == true){
          this.imagePicker3.getPictures({
            maximumImagesCount: 1
          }).then(
            (results3) => {
              for (var i = 0; i < results3.length; i++) {
                this.uploadImageToFirebase(results3[i]);
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

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image3, randomId)
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
