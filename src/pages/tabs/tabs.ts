import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";
import { InformationPage } from "../information/information";
//import {NewPostsMenuPage} from "../new-posts-menu/new-posts-menu";
import {ManagePostsMenuPage} from "../manage-posts-menu/manage-posts-menu";
//import {MapPage} from "../map/map";
import {MapsPage} from "../maps/maps";
//import {ListPage} from "../list/list";
import {List2Page} from "../list2/list2";
//import {NewPostModalPage} from "../new-post-modal/new-post-modal";
//import {MenuPage} from "../menu/menu";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1Root = WelcomePage;
  tab2Root = ManagePostsMenuPage;
  tab3Root = InformationPage;
  tab4Root = MapsPage;
  tab5Root = List2Page;



  constructor(
              public navCtrl: NavController,
              public navParams: NavParams) {}

  ionViewDidLoad() {

  }

}
