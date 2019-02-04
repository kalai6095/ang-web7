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

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: "full"},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: IntroComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Client', component: ClientsComponent},
  {path: 'Pricing', component: PricingComponent},
  {path: 'Service', component: ServicesComponent},
  {path: 'Testimonial', component: TestimonialComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'Article/:id', component: ArticleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
