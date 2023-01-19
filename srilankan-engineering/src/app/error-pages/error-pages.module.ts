import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { MaingtenancePageComponent } from './maingtenance-page/maingtenance-page.component';

@NgModule({
  declarations: [
    MaingtenancePageComponent
  ],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule
  ]
})
export class ErrorPagesModule { }
