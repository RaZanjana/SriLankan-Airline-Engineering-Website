import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { WorkshopsSliderComponent } from '../components/sub-components/workshops-slider/workshops-slider.component';
import { TabItemComponent } from '../components/sub-components/tab-item/tab-item.component';
import { WorkshopItemComponent } from '../components/sub-components/slide-items/workshop-item/workshop-item.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { TestimonialItemComponent } from '../components/sub-components/testimonial-item/testimonial-item.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageHeaderComponent } from '../components/sub-components/page-header/page-header.component';
import { MainCaroselItemComponent } from '../components/sub-components/slide-items/main-carosel-item/main-carosel-item.component';
import { MediaComponent } from './media/media.component';
import { DotLineComponent } from '../components/dot-line/dot-line.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ServicePreviewItemComponent } from '../components/sub-components/slide-items/service-preview-item/service-preview-item.component';
import { ClientLogoItemComponent } from '../components/sub-components/slide-items/client-logo-item/client-logo-item.component';
import { MediaItemComponent } from '../components/sub-components/slide-items/media-item/media-item.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InquryComponent } from './inqury/inqury.component';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CapabilitiesAndApprovalsComponent } from './capabilities-and-approvals/capabilities-and-approvals.component';
import { CertificateItemComponent } from '../components/sub-components/certificate-item/certificate-item.component';
import { CertificateViewerComponent } from '../components/certificate-viewer/certificate-viewer.component';
import { MediaArticleComponent } from './media/media-article/media-article.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    HomeComponent,
    WorkshopsSliderComponent,
    TabItemComponent,
    WorkshopItemComponent,
    TestimonialsComponent,
    TestimonialItemComponent,
    AboutUsComponent,
    PageHeaderComponent,
    MainCaroselItemComponent,
    MediaComponent,
    DotLineComponent,
    ServicePreviewItemComponent,
    ClientLogoItemComponent,
    MediaItemComponent,
    OurServicesComponent,
    InquryComponent,
    CapabilitiesAndApprovalsComponent,
    CertificateItemComponent,
    CertificateViewerComponent,
    MediaArticleComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SwiperModule,
    MatTabsModule,
    LightgalleryModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    AngularCountriesFlagsModule,
    NgbDropdownModule,
    PdfViewerModule,
  ],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    }
  ],
})
export class PagesModule { }
