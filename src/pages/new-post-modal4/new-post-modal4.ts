import { Component } from '@angular/core';
import { ViewController, normalizeURL, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-new-task-modal4',
  templateUrl: 'new-post-modal4.html'
})
export class NewPostModal4Page {

  validations_form4: FormGroup;
  image4: any;
  loading4: any;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private imagePicker4: ImagePicker,
    private firebaseService: FirebaseService,
    private loadingCtrl4: LoadingController
  ) {
    this.loading4 = this.loadingCtrl4.create();
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    this.image4 = "./assets/imgs/default4.png";
    this.validations_form4 = this.formBuilder.group({
      title4: new FormControl('', Validators.required),
      description4: new FormControl('', Validators.required),
      fullname4: new FormControl('',Validators.required)
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(value4){
    let data4 = {
      fullname4: value4.fullname4,
      title4: value4.title4,
      description4: value4.description4,
      image4: this.image4
    }
    this.firebaseService.createJob(data4)
      .then(
        res => {
          this.resetFields();
          this.viewCtrl.dismiss();
        }
      )
  }

  openImagePicker4(){
    this.imagePicker4.hasReadPermission()
      .then((result4) => {
        if(result4 == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker4.requestReadPermission();
        }
        else if(result4 == true){
          this.imagePicker4.getPictures({
            maximumImagesCount: 1
          }).then(
            (results4) => {
              for (var i = 0; i < results4.length; i++) {
                this.uploadImageToFirebase(results4[i]);
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

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image4, randomId)
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
