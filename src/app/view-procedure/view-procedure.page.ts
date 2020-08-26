import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import data from './../../assets/pathrequests.json';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-procedure',
  templateUrl: './view-procedure.page.html',
  styleUrls: ['./view-procedure.page.scss'],
})
export class ViewProcedurePage implements OnInit {

  pathrequestid: string;
  hnumber: string;
  requeststatus: string;
  pathtitle: string;
  primaryinvestigator: string;
  studypathologist: string;
  
  items: any[];
  private pathrequests: any[] = data;
  tablestyle = 'bootstrap';


  constructor(private alertCtrl: AlertController, private http: HttpClient, private route: ActivatedRoute, private router: Router, public navCtrl: NavController) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pathrequestid = params["pathrequestid"];
      this.hnumber = params["hnumber"];
      this.requeststatus = params["requeststatus"];
      this.pathtitle = params["pathtitle"];
      this.primaryinvestigator = params["primaryinvestigator"];
      this.studypathologist = params["studypathologist"];
      this.loadData();
    });
  }

  loadData(){

    let data:Observable<any>;
    data =this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_procedure/?q=%7B%22path_request_id%22:%22'+this.pathrequestid+'%22%7D')
    .pipe(map((response: any) => response.items )) // map to use the items key!
    data.subscribe( data => {
       this.items = data;
       console.log(data);
     });
    

    /* Old Method
    let data:Observable<any>;
    data = this.http.get('assets/v_nec_int_procedure.json');
    data.subscribe(data => {
      this.items = data.filter(item => item.pathrequestid === this.pathrequestid)
    });
    */
  }

  goToNecropsyDetails(row){
    let navigationExtras: NavigationExtras = {
      queryParams: {

        pathrequestid: row.path_request_id,
        hnumber: this.hnumber,
        pathtitle: this.pathtitle,
        primaryinvestigator: this.primaryinvestigator,
        procedureid: row.procedure_id,
        requeststatus: this.requeststatus,
        requestdate: row.request_date,
        studypathologist: this.studypathologist,
        animalqty: row.animal_qty,
        marker: row.marker,
        method: row.method,
        fixative: row.fixative,
        handling: row.handling,
        processing: row.processing
        

        /* Old Method
         pathrequestid: row.pathrequestid,
         hnumber: this.hnumber,
         pathtitle: this.pathtitle,
         primaryinvestigator: this.primaryinvestigator,
         procedureid: row.procedureid,
         requeststatus: this.requeststatus,
         requestdate: row.requestdate,
         studypathologist: this.studypathologist,
         animalqty: row.animalqty,
         marker: row.marker,
         method: row.method,
         fixative: row.fixative,
         handling: row.handling,
         processing: row.processing
        */

      }
    };
    console.log(navigationExtras);
    this.navCtrl.navigateForward(['view-necropsy-details'], navigationExtras);
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

}
