import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'logovernight', loadChildren: './logovernight/logovernight.module#LogovernightPageModule' },
  { path: 'logsleepiness', loadChildren: './logsleepiness/logsleepiness.module#LogsleepinessPageModule' },
  { path: 'viewlog', loadChildren: './viewlog/viewlog.module#ViewlogPageModule' },  { path: 'logmodal', loadChildren: './logmodal/logmodal.module#LogmodalPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
