import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import { LoginPage } from "../login/login";

@Component({
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor (public navCtrl: NavController){}

  loginPage(){
    this.navCtrl.setRoot(LoginPage);
  }


  slides = [
    {
      title: "Welcome to HandToHand!",
      description: "<b>Hand To Hand.</b> The community sharing application where all people together could help each other and make our community to thrive",
      image: "assets/imgs/thesis5.jpg",
    },
    {
      title: "What is HandToHand?",
      description: "<b>Donate with your heart.</b> Many people have hard time and other have plenty to give. If you have food, clothes or other things that you don't need you can easily donate or offer them.",
      image: "assets/imgs/thesis2.jpg",
    },
    {
      title: "HandToHand for the community",
      description: "<b>Circular Economy.</b> This actions of offer or donation could promote sustainability and circular economy givin new life to unused things. We must support local stores and search for the best offers.",
      image: "assets/imgs/thesis4.jpg",
    }
  ];

}
