import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogsleepinessPage } from './logsleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: LogsleepinessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogsleepinessPage]
})
export class LogsleepinessPageModule {}
