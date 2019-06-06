import { Component } from '@angular/core';
import { ViewController, normalizeURL, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ImagePicker } from "@ionic-native/image-picker";

@Component({
  selector: 'page-new-task-modal2',
  templateUrl: 'new-post-modal2.html'
})
export class NewPostModal2Page {

  validations_form2: FormGroup;
  image2: any;
  loading2: any;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private imagePicker2: ImagePicker,
    private firebaseService: FirebaseService,
    private loadingCtrl2: LoadingController
  ) {
    this.loading2 = this.loadingCtrl2.create();
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    this.image2 = "./assets/imgs/default2.png";
    this.validations_form2 = this.formBuilder.group({
      title2: new FormControl('', Validators.required),
      description2: new FormControl('', Validators.required),
      fullname2: new FormControl('',Validators.required)

    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(value2){
    let data2 = {
      fullname2: value2.fullname2,
      title2: value2.title2,
      description2: value2.description2,
      image2: this.image2,
    }
    this.firebaseService.createBorrow(data2)
      .then(
        res => {
          this.resetFields();
          this.viewCtrl.dismiss();
        }
      )
  }

  openImagePicker2(){
    this.imagePicker2.hasReadPermission()
      .then((result2) => {
        if(result2 == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker2.requestReadPermission();
        }
        else if(result2 == true){
          this.imagePicker2.getPictures({
            maximumImagesCount: 1
          }).then(
            (results2) => {
              for (var i = 0; i < results2.length; i++) {
                this.uploadImageToFirebase(results2[i]);
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

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image2, randomId)
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
