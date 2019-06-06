import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IntroPage } from "../pages/intro/intro";
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { Menu2Page } from "../pages/menu2/menu2";
import { Menu3Page } from "../pages/menu3/menu3";
import { Menu4Page } from "../pages/menu4/menu4";
import { DetailsPage } from '../pages/details/details';
import { Details2Page } from "../pages/details2/details2";
import { Details3Page } from "../pages/details3/details3";
import { Details4Page } from "../pages/details4/details4";
import { DetailsUserPage } from "../pages/details-user/details-user";
import { Details2UserPage } from "../pages/details2-user/details2-user";
import { Details3UserPage } from "../pages/details3-user/details3-user";
import { Details4UserPage } from "../pages/details4-user/details4-user";
import { NewPostModalPage } from '../pages/new-post-modal/new-post-modal';
import { NewPostModal2Page } from "../pages/new-post-modal2/new-post-modal2";
import { NewPostModal3Page } from "../pages/new-post-modal3/new-post-modal3";
import { NewPostModal4Page } from "../pages/new-post-modal4/new-post-modal4";
import { NewPostsMenuPage } from "../pages/new-posts-menu/new-posts-menu";
import { ManagePostsMenuPage } from "../pages/manage-posts-menu/manage-posts-menu";
import { WelcomePage } from "../pages/welcome/welcome";
import { TabsPage } from "../pages/tabs/tabs";
import { ShowMenuResultsPage } from "../pages/show-menu-results/show-menu-results";
import { ShowMenu2ResultsPage } from "../pages/show-menu2-results/show-menu2-results";
import { ShowMenu3ResultsPage } from "../pages/show-menu3-results/show-menu3-results";
import { ShowMenu4ResultsPage } from "../pages/show-menu4-results/show-menu4-results";
import { InformationPage } from "../pages/information/information";
import { Info1Page } from "../pages/info1/info1";
import { Info2Page } from "../pages/info2/info2";
import { Info3Page } from "../pages/info3/info3";
import { Info4Page } from "../pages/info4/info4";
import { MapsPage } from "../pages/maps/maps";
import {Maps2Page} from "../pages/maps2/maps2";
import { ListPage } from "../pages/list/list";
import {List2Page} from "../pages/list2/list2";
import { MapPage } from "../pages/map/map";


import { ImagePicker } from '@ionic-native/image-picker';

import { FirebaseService } from '../pages/services/firebase.service';
import { AuthService } from '../pages/services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';
import { GoogleMaps } from "@ionic-native/google-maps";
import { GoogleMapsProvider } from "../providers/google-maps/google-maps";
import { LocationsProvider } from "../providers/locations/locations";
import {ConnectivityProvider} from "../providers/connectivity/connectivity";
import {HttpModule} from "@angular/http";
import { Geolocation } from "@ionic-native/geolocation";

// @ts-ignore
@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    LoginPage,
    RegisterPage,
    MenuPage,
    Menu2Page,
    Menu3Page,
    Menu4Page,
    NewPostModalPage,
    NewPostModal2Page,
    NewPostModal3Page,
    NewPostModal4Page,
    NewPostsMenuPage,
    ManagePostsMenuPage,
    DetailsPage,
    Details2Page,
    Details3Page,
    Details4Page,
    DetailsUserPage,
    Details2UserPage,
    Details3UserPage,
    Details4UserPage,
    WelcomePage,
    TabsPage,
    ShowMenuResultsPage,
    ShowMenu2ResultsPage,
    ShowMenu3ResultsPage,
    ShowMenu4ResultsPage,
    InformationPage,
    Info1Page,
    Info2Page,
    Info3Page,
    Info4Page,
    MapsPage,
    Maps2Page,
    ListPage,
    List2Page,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    LoginPage,
    RegisterPage,
    MenuPage,
    Menu2Page,
    Menu3Page,
    Menu4Page,
    NewPostModalPage,
    NewPostModal2Page,
    NewPostModal3Page,
    NewPostModal4Page,
    NewPostsMenuPage,
    ManagePostsMenuPage,
    DetailsPage,
    Details2Page,
    Details3Page,
    Details4Page,
    DetailsUserPage,
    Details2UserPage,
    Details3UserPage,
    Details4UserPage,
    WelcomePage,
    TabsPage,
    ShowMenuResultsPage,
    ShowMenu2ResultsPage,
    ShowMenu3ResultsPage,
    ShowMenu4ResultsPage,
    InformationPage,
    Info1Page,
    Info2Page,
    Info3Page,
    Info4Page,
    MapsPage,
    Maps2Page,
    ListPage,
    List2Page,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    GoogleMaps,
    FirebaseService,
    AuthService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider,
  ]
})

export class AppModule {}
