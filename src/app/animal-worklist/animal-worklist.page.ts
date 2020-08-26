import { Component, OnInit } from '@angular/core';
import { ModalController }  from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TaskFulfillmentPage } from '../modals/task-fulfillment/task-fulfillment.page';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import {Plugins, FilesystemDirectory, FilesystemEncoding} from '@capacitor/core';
import { map } from 'rxjs/operators';


const  {Filesystem} = Plugins;


@Component({
  selector: 'app-animal-worklist',
  templateUrl: './animal-worklist.page.html',
  styleUrls: ['./animal-worklist.page.scss'],
})
export class AnimalWorklistPage implements OnInit {

  pathrequestid: string;
  procedureid: number;
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
  primaryinvestigator: string;
  studypathologist: string;

  body: string;
 ti

  workliststatus: string;
  completion: string;

  items: any[];
  tablestyle = 'bootstrap';

  row = {
    technician: ''
  }

  pdfObj = null;
  pdfBase64: string;

  constructor(private modalController: ModalController,  private plt: Platform, private file: File, private fileOpener: FileOpener, private alertCtrl: AlertController, private http: HttpClient, private route: ActivatedRoute, private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pathrequestid = params["pathrequestid"];
      this.procedureid = params["procedureid"];
      this.hnumber = params["hnumber"];
      this.requeststatus = params["requeststatus"];
      this.pathtitle = params["pathtitle"];
      this.primaryinvestigator = params["primaryinvestigator"];
      this.studypathologist = params["studypathologist"];
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
    data =this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_animal/?q=%7B%22path_request_id%22:%22'+this.pathrequestid+'%22,%22procedure_id%22:'+this.procedureid+'%7D')
    .pipe(map((response: any) => response.items )) // map to use the items key!
    data.subscribe( data => {
       this.items = data;
       console.log(data);
     });


    /* Old Method
    let data:Observable<any>;
    data = this.http.get('assets/v_nec_int_animal.json');
    data.subscribe(data => {
      this.items = data.filter(item => item.pathrequestid === this.pathrequestid && item.procedureid === this.procedureid)
      console.log(this.items);
    });
    */
  }


  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }
  
  async openModalWithData(row) {
    const modal = await this.modalController.create({
      component: TaskFulfillmentPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        pathrequestid: row.path_request_id,
        procedureid: row.procedure_id,
        technician: row.technician,
        animalid: row.animal_id,
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


  createPdf() {
    let rows = [];
    let animalidlist = [];
    let recordingslist = [];
    
    rows.push(['animalid', 'technician', 'workliststatus', 'completion', 'Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
    for (let i = 0; i < this.items.length; i++) {
      const row = this.items[i];
      for (let i = 1; i < row.body.length; i++) {
      rows.push([
        row.animal_id,
        row.technician,
        row.workliststatus, 
        row.completion,
        row.body[i][0],
        row.body[i][1],
        row.body[i][2],
        row.body[i][3],
        row.body[i][4],
        row.body[i][5],
        row.body[i][6],
        row.body[i][7]
      ])
     }
    }

    for (let i = 0; i < this.items.length; i++) {
      const row = this.items[i];
      animalidlist.push([
        row.animal_id
      ])
    }

    recordingslist.push(['Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
    for (let i = 0; i < this.items.length; i++) {
     const row = this.items[i];
      for (let i = 1; i < row.body.length; i++) {
        recordingslist.push([
          row.body[i][0],
          row.body[i][1],
          row.body[i][2],
          row.body[i][3],
          row.body[i][4],
          row.body[i][5],
          row.body[i][6],
          row.body[i][7]
       ])
     }
    }

    var docDefinition = {

      pageOrientation: 'landscape',

      content: [
        { text: 'Necropsy Task Fulfillment', style: 'header' },
        { text: 'Protocol: ' + this.pathrequestid +'\n', alignment: 'left' },
        { text: 'Histology #: ' + this.hnumber, alignment: 'left' },
        { text: 'Title: ' + this.pathtitle, alignment: 'left' },
        { text: 'Pathologist: ' + this.studypathologist, alignment: 'left' },
        { text: 'Investigator: ' + this.primaryinvestigator, alignment: 'left' },
        { text: 'Animal IDs: ' + animalidlist, alignment: 'left' },
        { text: new Date().toLocaleString(), alignment: 'right' },

        { table: {
            body: rows
          }
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    
    this.pdfObj = pdfMake.createPdf(docDefinition);

    if (this.plt.is('cordova')) {
      this.pdfObj.getBase64((data) => {
        this.pdfBase64 = data;
        console.log(this.pdfBase64);
      });
    }
    
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      // Save the PDF to the device
      const fileName = 'taskfulfillment.pdf';
      try {
        Filesystem.writeFile({
          path: fileName,
          data: this.pdfBase64,
          directory: FilesystemDirectory.Documents
          // encoding: FilesystemEncoding.UTF8
        }).then((writeFileResult) => {
          Filesystem.getUri({
              directory: FilesystemDirectory.Documents,
              path: fileName
          }).then((getUriResult) => {
              const path = getUriResult.uri;
              this.fileOpener.open(path, 'application/pdf')
              .then(() => console.log('File is opened'))
              .catch(error => console.log('Error openening file', error));
              this.navCtrl.navigateForward(['/path-request'])
          }, (error) => {
              console.log(error);
          });
        });
      } catch (error) {
        console.error('Unable to write file', error);
      }
    } else {
    // On a browser simply use download
      this.pdfObj.download();
      this.navCtrl.navigateForward(['/path-request'])
    }
  }

  

}
