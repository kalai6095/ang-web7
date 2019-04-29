import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
//import {InMemoryDataService} from "./inmemory/"

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
import {NotfoundComponent} from './notfound/notfound.component';
import {PaginationComponent} from './pagination/pagination.component';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {SignupComponent} from './signup/signup.component';
import {InMemoryDataService} from "./services/inmemory/in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';

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
    PaginationComponent,
    LoginComponent,
    ContactComponent,
    SignupComponent,
    ArticleEditComponent,
    ArticleCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
