import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {IntroComponent} from './intro/intro.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContentComponent} from './content/content.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {FooterComponent} from './footer/footer.component';
import {ClientsComponent} from './clients/clients.component';
import {PricingComponent} from './pricing/pricing.component';
import {ServicesComponent} from './services/services.component';
import {LoaderComponent} from './loader/loader.component';
import {HeaderComponent} from './header/header.component';
import {SocialComponent} from './social/social.component';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {PostComponent} from './post/post.component';
import {ArticleComponent} from './article/article.component';
import {TextFilter} from "./text-filter";
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    FooterComponent,
    ClientsComponent,
    PricingComponent,
    ServicesComponent,
    LoaderComponent,
    HeaderComponent,
    SocialComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    TextFilter,
    NotfoundComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
