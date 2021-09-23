import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { CharityComponent} from './charity/charity.component';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/ about.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'gallery', component: GalleryComponent },  
{ path: 'charity', component: CharityComponent },
{ path: 'about', component: AboutComponent },
{ path: 'social', component: SocialComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
