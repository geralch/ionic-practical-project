import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, PopoverController, MenuController, SplitPane } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NotificacionesPage } from "../pages/notificaciones/notificaciones"
declare let $;
declare let Notification
@Component({
  templateUrl: 'app.html',
  providers: [SplitPane]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'inicio';

  private title: string = ""

  private paginaactiva: string = "inicio";


  private minimenu: boolean = false;

  constructor(public menu: MenuController, public split: SplitPane, public popoverCtrl: PopoverController, private localNotifications: LocalNotifications, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    /*setInterval(() => {
     this.Notificaciones();
    }, 10000)*/
  }
  private contadorNot: string = "0";

  changeMenuSize() {
    //console.log(this.menu.isOpen());  


    this.minimenu = !this.minimenu;



    let menu = document.getElementsByClassName('split-pane-side') as HTMLCollectionOf<HTMLElement>
    //console.log(menu[0].style.minWidth)
    if (menu.length > 0) {
      console.log(menu[0].style)
    }



  }



  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("core")) {
        console.log(Notification.permission)
        if (Notification.permission != "granted") {
          Notification.requestPermission()
        }
      }
      if (!this.platform.is("core")) {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }


      this.nav.viewDidEnter.subscribe((view) => {
        //console.log(view.instance.constructor.name);
        console.log(view);
        this.title = view.id
        console.log(view.id)
        switch (view.id) {
          case 'contactos':
            this.paginaactiva = "contactos";
            break;
          case "inicio":
            this.paginaactiva = "inicio";
            break;
          case "eventos":
            this.paginaactiva = "eventos";
            break;
          case 'clientes':
            this.paginaactiva = "clientes";
            break;
          case 'geralprueba':
          this.paginaactiva = "geralprueba";
          break;

        }
      });

      //console.log(this.nav._views["0"].id);


    });



  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(NotificacionesPage);
    popover.present({
      ev: myEvent
    });
  }



  Notificaciones() {


    if (this.platform.is("core")) {
      let notificacion = new Notification("aiuda", {
        tag: Math.floor((Math.random() * 1000) + 1),
        title: "clikeamoe ome",
        timestamp: 2000
      })
      notificacion.onclick = (data) => {
        console.log(data.currentTarget.tag)
      }

    } else {
      this.localNotifications.schedule({
        id: Math.floor((Math.random() * 1000) + 1),
        text: 'Single ILocalNotification',
        data: { secret: Math.floor((Math.random() * 1000) + 1) }
      });
    }



  }
  ContadorNotificaciones() {






  }

  LoadViewMenu(pagina: string) {
    this.paginaactiva = pagina;
    this.nav.setRoot(pagina)
  }

}
