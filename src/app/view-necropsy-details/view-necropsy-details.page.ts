import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import data from './../../assets/pathrequests.json';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-necropsy-details',
  templateUrl: './view-necropsy-details.page.html',
  styleUrls: ['./view-necropsy-details.page.scss'],
})
export class ViewNecropsyDetailsPage implements OnInit {

  pathrequestid: string;
  procedureid: string;
  hnumber: string;
  requeststatus: string;
  pathtitle: string;
  requestdate: string;
  animalqty: string;
  marker: string;
  method: string;
  fixative: string;
  handling: string;
  processing: string;

  items: any[];
  private pathrequests: any[] = data;
  tablestyle = 'bootstrap';


  constructor(private alertCtrl: AlertController, private http: HttpClient, private route: ActivatedRoute, private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pathrequestid = params["pathrequestid"];
      this.procedureid = params["procedureid"];
      this.hnumber = params["hnumber"];
      this.requeststatus = params["requeststatus"];
      this.pathtitle = params["pathtitle"];
      this.requestdate = params["requestdate"];
      this.animalqty = params["animalqty"];
      this.marker = params["marker"];
      this.method = params["method"];
      this.fixative = params["fixative"];
      this.handling = params["handling"];
      this.processing = params["processing"];
      this.loadData();
      this.checkForUndefined();
    });
  }

  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }

  loadData(){
    let data:Observable<any>;
    data = this.http.get('assets/v_nec_int_tissue.json');
    data.subscribe(data => {
      this.items = data.filter(item => item.pathrequestid === this.pathrequestid && item.procedureid === this.procedureid);
    });
  }


  async open(row) {
    
  }

  checkForUndefined(){
    if(this.marker === undefined){
      this.marker = "none";
    }
    if(this.method === undefined){
      this.method = "none";
    }
    if(this.fixative === undefined){
      this.fixative = "none";
    }
    if(this.handling === undefined){
      this.handling = "none";
    }
    if(this.processing === undefined){
      this.processing = "none";
    }
  }

  goToAnimalWorklist(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         pathrequestid: this.pathrequestid,
         procedureid: this.procedureid,
         animalqty: this.animalqty,
         hnumber: this.hnumber,
         requeststatus: this.requeststatus,
         pathtitle: this.pathtitle,
         marker: this.marker,
         method: this.method,
         fixative: this.fixative,
         handling: this.handling,
         processing: this.processing,
         requestdate: this.requestdate
      }
    };
    this.navCtrl.navigateForward(['animal-worklist'], navigationExtras);
  }
  
  goToProcedure(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         pathrequestid: this.pathrequestid,
         procedureid: this.procedureid,
         hnumber: this.hnumber,
         requeststatus: this.requeststatus,
         pathtitle: this.pathtitle
      }
    };
    console.log(navigationExtras);
    this.navCtrl.navigateBack(['/view-procedure'], navigationExtras);
  }

  doRefresh(event) {
    this.loadData();
    event.target.complete();
  }

}
