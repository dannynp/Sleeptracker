import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-logovernight',
  templateUrl: './logovernight.page.html',
  styleUrls: ['./logovernight.page.scss'],
})
export class LogovernightPage implements OnInit {
  // private currentDate = new Date().toISOString();
  private sleepStart = new Date().toISOString();
  private sleepEnd = new Date().toISOString();

  constructor(public navCtrl:NavController, public sleepService:SleepService,
    public firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  back() {this.navCtrl.goBack();}

  add() {
    var sleepStartObj = new Date(this.sleepStart);
    var sleepEndObject = new Date(this.sleepEnd);
    var newSleepData = new OvernightSleepData(sleepStartObj, sleepEndObject);
    this.firebaseService.addSleepLog(newSleepData);
    this.sleepService.logOvernightData();

    this.back();
  }
}
