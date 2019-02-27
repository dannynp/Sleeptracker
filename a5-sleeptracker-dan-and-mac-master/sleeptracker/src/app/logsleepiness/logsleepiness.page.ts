import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-logsleepiness',
  templateUrl: './logsleepiness.page.html',
  styleUrls: ['./logsleepiness.page.scss'],
})
export class LogsleepinessPage implements OnInit {
  private sleepinessTime = new Date().toISOString();
  private sleepinessScale:number;


  constructor(public navCtrl:NavController, public sleepService:SleepService,
    public firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.goBack();
  }

  add(){
    var sleepinessTimeObj = new Date(this.sleepinessTime);
    console.log(this.sleepinessScale);
    var newSleepinessData = new StanfordSleepinessData(this.sleepinessScale, sleepinessTimeObj);
    this.firebaseService.addSleepLog(newSleepinessData);
    this.sleepService.logSleepinessData();

    this.back();
}}
