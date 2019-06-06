import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { LoginPage } from '../pages/login/login';
//import {ManagePostsMenuPage} from "../pages/manage-posts-menu/manage-posts-menu";
//import {NewPostsMenuPage} from "../pages/new-posts-menu/new-posts-menu";
//import {ShowMenuResultsPage} from "../pages/show-menu-results/show-menu-results";
//import {WelcomePage} from "../pages/welcome/welcome";
//import {LoginPage} from "../pages/login/login";
import { IntroPage } from "../pages/intro/intro";
//import {InformationPage} from "../pages/information/information";
//import {Info1Page} from "../pages/info1/info1";
//import {Info2Page} from "../pages/info2/info2";
//import {Info3Page} from "../pages/info3/info3";
//import {Info4Page} from "../pages/info4/info4";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
