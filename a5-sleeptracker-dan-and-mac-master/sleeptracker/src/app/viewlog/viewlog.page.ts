import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { LogmodalPage } from '../logmodal/logmodal.page';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-viewlog',
  templateUrl: './viewlog.page.html',
  styleUrls: ['./viewlog.page.scss'],
})
export class ViewlogPage implements OnInit {

  constructor(public navCtrl:NavController, public sleepService:SleepService,
    public modalController: ModalController) {}

  ngOnInit() {
  }

  get allSleepData() {return SleepService.AllSleepData;}
  
  get allOvernightData() {return SleepService.AllOvernightData;}

  get allSleepinessData() {return SleepService.AllSleepinessData;}

  logClick(logId,dateString,summaryString) {
    this.modalController.create({
      component: LogmodalPage,
      componentProps: {
        id: logId,
        date: dateString,
        summary: summaryString
      }
    }).then((modal) => {
      modal.present();
    });
  }

  back() {this.navCtrl.goBack();}
}
