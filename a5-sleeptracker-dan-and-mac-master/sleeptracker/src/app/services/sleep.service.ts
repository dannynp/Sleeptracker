import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  constructor(public firebaseService:FirebaseService) {
    this.logOvernightData();
    this.logSleepinessData();
  	if(SleepService.LoadDefaultData) {
      this.addDefaultData();
  		SleepService.LoadDefaultData = false;
    }

  }

  private addDefaultData() {
    // this.logOvernightData(new OvernightSleepData(new Date('November 12, 2018 01:03:00'), new Date('November 12, 2018 09:25:00')));
    // this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 12, 2018 14:38:00')));
    // this.logOvernightData(new OvernightSleepData(new Date('November 12, 2018 23:11:00'), new Date('November 13, 2018 08:03:00')));
  }

  public logOvernightData() {
    this.firebaseService.getSleepLogs()
    .subscribe((array)=>{
      SleepService.AllOvernightData = [];
      for(var i=0; i<array.length; ++i){
        if(array[i]['type'] == 'OvernightSleepData'){
          var newSleepObj = new OvernightSleepData(new Date(),new Date());
          newSleepObj.fromObject(array[i]);
          SleepService.AllOvernightData.push(newSleepObj);
        }
      }
      for(var i=0; i<SleepService.AllSleepData.length; ++i){
        if(SleepService.AllSleepData[i] instanceof OvernightSleepData)
          SleepService.AllSleepData.splice(i,1);
      }
      for(var i=0; i<SleepService.AllOvernightData.length; ++i){
        SleepService.AllSleepData.push(SleepService.AllOvernightData[i]);
      }
    })
  }

  public logSleepinessData() {
  	this.firebaseService.getSleepLogs()
    .subscribe((array)=>{
      SleepService.AllSleepinessData = [];
      for(var i=0; i<array.length; ++i){
        if(array[i]['type'] == 'StanfordSleepinessData'){
          var newSleepObj = new StanfordSleepinessData(-1,new Date());
          newSleepObj.fromObject(array[i]);
          SleepService.AllSleepinessData.push(newSleepObj);
        }
      }
      for(var i=0; i<SleepService.AllSleepData.length; ++i){
        if(SleepService.AllSleepData[i] instanceof StanfordSleepinessData)
          SleepService.AllSleepData.splice(i,1);
      }
      for(var i=0; i<SleepService.AllSleepinessData.length; ++i){
        SleepService.AllSleepData.push(SleepService.AllSleepinessData[i]);
      }
    })
  }
}
