import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-path-request',
  templateUrl: './path-request.page.html',
  styleUrls: ['./path-request.page.scss'],
})
export class PathRequestPage implements OnInit {

  items: any[];
  test: any[];
  searchItems: any;
  public pathRequestFilter: string[];
  tablestyle = 'bootstrap';

  
  constructor(private alertCtrl: AlertController, private http: HttpClient, private router: Router, public navCtrl: NavController) { }


  ngOnInit() {
    this.loadData();
  }

  loadData(){

    let data:Observable<any>;
    data =this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_pathrequest/?limit=1000')
    .pipe(map((response: any) => response.items )) // map to use the items key!
    data.subscribe( data => {
       this.items = data;
       this.initializeItems();
       console.log(data);
     });

      /* Old Method
      let data:Observable<any>;
      data = this.http.get('assets/v_nec_int_pathrequests.json');
      data.subscribe(data => {
       this.items = data;
       this.initializeItems();
      });
      */
  }


  initializeItems(){
    this.pathRequestFilter = this.items;
  }

  goToProcedureDetails(row){
    let navigationExtras: NavigationExtras = {
      queryParams: {

      /* Old Method
      pathrequestid: row.pathrequestid,
      hnumber: row.hnumber,
      requeststatus: row.requeststatus,
      pathtitle: row.pathtitle,
      primaryinvestigator: row.primaryinvestigator,
      studypathologist: row.studypathologist
      */

       pathrequestid: row.path_request_id,
       hnumber: row.h_number,
       requeststatus: row.request_status,
       pathtitle: row.path_title,
       primaryinvestigator: row.primary_investigator,
       studypathologist: row.study_pathologist
      
      }
    };
    this.navCtrl.navigateForward(['/view-procedure'], navigationExtras);
  }

  filterItems(ev:any){
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.pathRequestFilter = this.items.filter(item => {
              //Original is pathrequestid
       return (item.path_request_id.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
     })
    }
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
