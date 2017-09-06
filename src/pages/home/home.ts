import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuItem } from "primeng/primeng";
declare let Highcharts;
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:"inicio"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  private dataej:any[]=[
    {
      "id": "59a9e87734c773bfd4234054",
      "index": 0,
      "valor": "$1,278.68",
      "name": "Lewis Marquez",
      "registered": "2017-04-08T06:04:14 +05:00"
    },
    {
      "id": "59a9e877cbe82ba2efb0b039",
      "index": 1,
      "valor": "$2,608.95",
      "name": "Ramos French",
      "registered": "2016-10-04T05:57:26 +05:00"
    },
    {
      "id": "59a9e8772dbb8b716038b045",
      "index": 2,
      "valor": "$1,969.77",
      "name": "Carol Nixon",
      "registered": "2014-04-03T06:13:27 +05:00"
    },
    {
      "id": "59a9e8773d6dc8e061c60ded",
      "index": 3,
      "valor": "$2,140.23",
      "name": "Jarvis Malone",
      "registered": "2016-05-23T04:42:31 +05:00"
    },
    {
      "id": "59a9e877df5e0d1703f73fd8",
      "index": 4,
      "valor": "$2,369.09",
      "name": "Garner Shaw",
      "registered": "2016-10-12T03:55:36 +05:00"
    },
    {
      "id": "59a9e87708d796c86c586725",
      "index": 5,
      "valor": "$1,627.77",
      "name": "Letitia Hendrix",
      "registered": "2014-03-14T08:17:28 +05:00"
    },
    {
      "id": "59a9e87700383a6dd50a57f9",
      "index": 6,
      "valor": "$2,257.38",
      "name": "Gaines Rivas",
      "registered": "2016-12-22T07:39:59 +05:00"
    }
  ];
  ionViewDidLoad() { 
    let scrollcontent = document.getElementsByClassName('scroll-content') as HTMLCollectionOf<HTMLElement>
    scrollcontent[1].style.marginTop = "0px";
    Highcharts.chart('pie1', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: true
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Microsoft Internet Explorer',
          y: 56.33
        }, {
          name: 'Chrome',
          y: 24.03, 
        }, {
          name: 'Firefox',
          y: 10.38
        }, {
          name: 'Safari',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'Proprietary or Undetectable',
          y: 0.2
        }]
      }]
    });

  }

}
