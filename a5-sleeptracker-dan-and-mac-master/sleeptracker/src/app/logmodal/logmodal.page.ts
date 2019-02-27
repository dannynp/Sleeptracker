import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logmodal',
  templateUrl: './logmodal.page.html',
  styleUrls: ['./logmodal.page.scss'],
})
export class LogmodalPage implements OnInit {

  constructor(public modalController:ModalController) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
