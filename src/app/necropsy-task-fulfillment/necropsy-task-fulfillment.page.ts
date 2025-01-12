import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import data from './../../assets/pathrequests.json';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { columnsTotalWidth } from '@swimlane/ngx-datatable';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


import {Plugins, CameraResultType, Capacitor, CameraSource, CameraPhoto, FilesystemDirectory, FilesystemEncoding} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { stringify } from 'querystring';

const  {Camera, Filesystem} = Plugins;


@Component({ 
  selector: 'app-necropsy-task-fulfillment',
  templateUrl: './necropsy-task-fulfillment.page.html',
  styleUrls: ['./necropsy-task-fulfillment.page.scss'],
})
export class NecropsyTaskFulfillmentPage implements OnInit {

  row = {
    tissue: '',
    weight: '',
    location: '',
    color: '',
    size: '',
    observations: '',
    grosscomments: ''
  }

  pdfObj = null;
  pdfBase64: string;


  photo: SafeResourceUrl;
  
  items: any[];
  private pathrequests: any[] = data;
  tablestyle = 'bootstrap';

  tissue: string;
  weight: string;
  location: string;
  color: string;
  size: string;
  observations: string;
  grosscomments: string;
  picturetext = "Take Picture";

  pathrequestid: string;
  procedureid: string;
  animalid: string;
  requestdate: string;
  date: string;
  completion: string;
  workliststatus = "Completed";
  technician: string;
  species: string;
  strain: string;

  

  constructor(private plt: Platform, private file: File, private fileOpener: FileOpener, private alertCtrl: AlertController, private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, public navCtrl: NavController, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pathrequestid = params["pathrequestid"];
      this.procedureid = params["procedureid"];
      this.requestdate = params["requestdate"];
      this.date = params["date"];
      this.technician = params["technician"]
      this.animalid = params["animalid"];
      this.species = params["species"];
      this.strain = params["strain"];
      this.requestdate = params["requestdate"];
      this.loadData();
    });
  }

  loadData(){
    let data:Observable<any>;
    data = this.http.get('assets/v_nec_int_tissue.json');
    data.subscribe(data => {
      this.items = data.filter(item => item.pathrequestid === this.pathrequestid && item.procedureid === this.procedureid)
      this.items = this.items.map(item => {
        if (!item.weight || item.weight == undefined) {
            item.weight = '';
        }
        if (!item.location || item.location == undefined) {
          item.location = '';
        }
        if (!item.color || item.color == undefined) {
          item.color = '';
        }
        if (!item.size || item.size == undefined) {
          item.size = '';
        }
        if (!item.observations || item.observations == undefined) {
          item.observations = '';
        }
        if (!item.grosscomments || item.grosscomments == undefined) {
          item.grosscomments = '';
        }
        return item;
      });
    });
  }

  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }

  getWeighCellClass({row}) {
    const isTrue = row.weighflg == 'Y';
    return {
      'true-row': isTrue,
      'false-row': !isTrue
    }
  }

  getPhotoCellClass({row}) {
    const isTrue = row.photoflg == 'Y';
    return {
      'true-row': isTrue,
      'false-row': !isTrue
    }
  }

  async takePicture() {
    const image = await Camera.getPhoto({
          quality: 100,
          allowEditing: true,
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
          saveToGallery: true,
          promptLabelHeader: ''
    });
          this.picturetext = 'Picture Taken';
          this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
  }

  createPdf() {
    let rows = [];
    rows.push(['Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
    for (let i = 0; i < this.items.length; i++) {
      const row = this.items[i];
      rows.push([
        row.tissue,
        row.weight,
        this.picturetext, // Maybe also dependend on row?
        row.location,
        row.color,
        row.size,
        row.observations,
        row.grosscomments
      ])
    }

    var docDefinition = {
      content: [
        { text: 'Necropsy Task Fulfillment', style: 'header' },
        { text: 'Path Request #: ' + this.pathrequestid, alignment: 'left' },
        { text: 'Technician: ' + this.technician, alignment: 'left' },
        { text: 'Group/Animal: ' + this.animalid, alignment: 'left' },
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
              this.goToAnimalWorklist()
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
      this.goToAnimalWorklist()
    }
  }

  goToAnimalWorklist(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         pathrequestid: this.pathrequestid,
         procedureid: this.procedureid,
         technician: this.technician,
         requestdate: this.requestdate,
         workliststatus: this.workliststatus,
         completion: new Date().toLocaleString()
      }
    };
    this.navCtrl.navigateForward(['animal-worklist'], navigationExtras);
  }

}

