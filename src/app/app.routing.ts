import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { CharityComponent} from './charity/charity.component';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/ about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'gallery',
      component: GalleryComponent
  },
  {
      path: 'charity',
      component: CharityComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'faq',
      component: FaqComponent
  },
  {
      path: 'social',
      component: SocialComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
  