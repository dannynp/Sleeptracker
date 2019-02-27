import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public sleepService:SleepService, public navCtrl:NavController) {
	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {return SleepService.AllSleepData;}

	
	gotoLogSleepiness() {this.navCtrl.navigateForward('/logsleepiness');}
	gotoLogOvernight() {this.navCtrl.navigateForward('/logovernight');}
	gotoViewLog() {this.navCtrl.navigateForward('/viewlog');}
}
