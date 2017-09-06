import { ContactosDetail } from './../pages/contactos/contactos-detail';
import { PipesModule } from './../pipes/pipes.module';
import { EventoDetailPage } from './../pages/eventos/evento-detail';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, SplitPane } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GeneralService } from "./general.service"
import { NotificacionesPage } from "../pages/notificaciones/notificaciones"  
import { CalendarModule } from "primeng/primeng";

@NgModule({
  declarations: [
    MyApp, 
    NotificacionesPage,
    EventoDetailPage,ContactosDetail
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule, 
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(), 
    PipesModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    NotificacionesPage,
    EventoDetailPage,ContactosDetail
  ],
  providers: [
    LocalNotifications,
    GeneralService,
    StatusBar,
    SplashScreen, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
