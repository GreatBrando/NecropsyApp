import { Component, OnInit } from '@angular/core';
import { ModalController }  from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import data from './../../assets/pathrequests.json';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TaskFulfillmentPage } from '../modals/task-fulfillment/task-fulfillment.page';


@Component({
  selector: 'app-animal-worklist',
  templateUrl: './animal-worklist.page.html',
  styleUrls: ['./animal-worklist.page.scss'],
})
export class AnimalWorklistPage implements OnInit {

  pathrequestid: string;
  procedureid: string;
  hnumber: string;
  requeststatus: string;
  pathtitle: string;
  date: string;
  requestdate: string;
  animalqty: string;
  marker: string;
  method: string;
  fixative: string;
  handling: string;
  processing: string;

  body: string;

  workliststatus: string;
  completion: string;

  items: any[];
  private pathrequests: any[] = data;
  tablestyle = 'bootstrap';

  row = {
    technician: ''
  }

  constructor(private modalController: ModalController, private alertCtrl: AlertController, private http: HttpClient, private route: ActivatedRoute, private router: Router, public navCtrl: NavController) { }

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
      console.log(this.hnumber);
      this.loadData();
    });
  }

  loadData(){
    let data:Observable<any>;
    data = this.http.get('assets/v_nec_int_animal.json');
    data.subscribe(data => {
      this.items = data.filter(item => item.pathrequestid === this.pathrequestid && item.procedureid === this.procedureid)
      console.log(this.items);
    });
  }


  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }

  doRefresh(event) {
    this.loadData();
    event.target.complete();
  }
  
  async openModalWithData(row) {
    const modal = await this.modalController.create({
      component: TaskFulfillmentPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        pathrequestid: row.pathrequestid,
        procedureid: row.procedureid,
        technician: row.technician,
        animalid: row.animalid,
        species: row.species,
        strain: row.strain,
        body: row.body,
        requestdate: this.requestdate,
        date: new Date().toLocaleString()
      }
    });
    modal.onWillDismiss().then(dataReturned => {
      this.workliststatus = dataReturned.data.workliststatus;
      this.completion = dataReturned.data.completion;
      this.body = dataReturned.data.body;

      row.workliststatus = this.workliststatus;
      row.completion = this.completion;
      row.body = this.body;
      console.log('Receive: ', this.workliststatus, this.completion, this.body);
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
      console.log('Sending: ', row.pathrequestid, row.procedureid, row.technician, row.animalid, row.species, row.strain);
    });
  }


  enterGrossObservations(row){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         pathrequestid: row.pathrequestid,
         procedureid: row.procedureid,
         technician: row.technician,
         animalid: row.animalid,
         species: row.species,
         strain: row.strain,
         requestdate: this.requestdate,
         date: new Date().toLocaleString()
      }
    };
    this.navCtrl.navigateForward(['/necropsy-task-fulfillment'], navigationExtras);
  }

  goToNecropsyDetails(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         pathrequestid: this.pathrequestid,
         hnumber: this.hnumber,
         requeststatus: this.requeststatus,
         pathtitle: this.pathtitle,
         procedureid: this.procedureid,
         animalqty: this.animalqty,
         marker: this.marker,
         method: this.method,
         handling: this.handling,
         fixative: this.method,
         processing: this.processing
      }
    };
    this.navCtrl.navigateBack(['/view-necropsy-details'], navigationExtras);
  }

  

}
