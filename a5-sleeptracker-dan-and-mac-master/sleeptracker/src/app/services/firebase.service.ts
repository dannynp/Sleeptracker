import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { SleepData } from '../data/sleep-data';
// import { OvernightSleepData } from '../data/overnight-sleep-data';
// import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Observable } from 'rxjs';
import { OvernightSleepData } from '../data/overnight-sleep-data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
	collection:AngularFirestoreCollection;
  logs: Observable<any[]>;
  constructor(db:AngularFirestore) {
  	this.collection = db.collection('a5-sleeptracker');
  }

  addSleepLog(sleepLog:any) {
    //TODO: implement this function to add sleep logs
    this.collection.add(sleepLog.toObject())
    .then((reference) => {
      console.log(reference);
    });
  } 

  getSleepLogs():Observable<DocumentData[]> {
    //TODO: implement this function to retrieve sleep logs
    return this.collection.valueChanges();
  }

  to
}
