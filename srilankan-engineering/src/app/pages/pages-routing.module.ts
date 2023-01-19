import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CapabilitiesAndApprovalsComponent } from './capabilities-and-approvals/capabilities-and-approvals.component';
import { HomeComponent } from './home/home.component';
import { InquryComponent } from './inqury/inqury.component';
import { MediaArticleComponent } from './media/media-article/media-article.component';
import { MediaComponent } from './media/media.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component: OurServicesComponent,
    path:'our-services'
  },
  {
    component: CapabilitiesAndApprovalsComponent,
    path: 'capabilities-and-approvals'
  },
  {
    component: AboutUsComponent,
    path: 'about-us'
  },
  {
    component: MediaComponent,
    path: 'media'
  },
  {
    component:MediaArticleComponent,
    path:'media-article'
  },
  {
    component:InquryComponent,
    path:'inquiry'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
