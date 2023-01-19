import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaingtenancePageComponent } from './maingtenance-page/maingtenance-page.component';

const routes: Routes = [
  {
    path:'under-maintenance',
    component: MaingtenancePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }
