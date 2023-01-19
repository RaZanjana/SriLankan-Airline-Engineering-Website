import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/srilankan-engineering/home',
    pathMatch:'full'
  },
  {
    component: MasterPageComponent,
    path:'',
    children:[
      {
        path:'srilankan-engineering',
        loadChildren:()=>import('./pages/pages.module').then(mod=>mod.PagesModule)
      }
    ]
  },
  {
    path: 'failure',
    loadChildren:()=>import('./error-pages/error-pages.module').then(mod=>mod.ErrorPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
