import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	toObject(){
		return {
			'type' : 'OvernightSleepData',
			'id' : this.id,
			'loggedAt' : this.loggedAt,
			'sleepStart' : this.sleepStart,
			'sleepEnd' : this.sleepEnd,
		};
	}

	fromObject(object:{}){
		if(object['id'] == undefined)
			return;
		this.id = object['id'];
		this.loggedAt = object['loggedAt'];
		this.sleepStart = object['sleepStart'].toDate();
		this.sleepEnd = object['sleepEnd'].toDate();
	}
}
