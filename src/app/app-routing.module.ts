import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {PricingComponent} from "./pricing/pricing.component";
import {ClientsComponent} from "./clients/clients.component";
import {ServicesComponent} from "./services/services.component";
import {TestimonialComponent} from "./testimonial/testimonial.component";
import {HomeComponent} from "./home/home.component";
import {BlogComponent} from "./blog/blog.component";
import {ArticleComponent} from "./article/article.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {RoutegaurdService} from "./services/routeg/routegaurd.service";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ContactComponent} from "./contact/contact.component";
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';


const routes: Routes = [

  {path: '', redirectTo: '/Home', pathMatch: "full"},
  {path: 'Login', component: LoginComponent},
  {path: 'Signup', component: SignupComponent},
  {path: 'Contactus', component: ContactComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: IntroComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Client', component: ClientsComponent},
  {path: 'Pricing', component: PricingComponent},
  {path: 'Service', component: ServicesComponent},
  {path: 'Testimonial', component: TestimonialComponent},
  {path: 'Blog', component: BlogComponent, canActivate: [RoutegaurdService]},
  {path: 'Article/:id', component: ArticleComponent, canActivate: [RoutegaurdService]},
  {path: 'Article-edit/:id', component: ArticleEditComponent, canActivate: [RoutegaurdService]},
  {path: 'Article-create', component: ArticleCreateComponent, canActivate: [RoutegaurdService]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
