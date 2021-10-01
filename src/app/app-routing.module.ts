import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from '../pages/home/home.component';
import { CollectionsPage } from '../pages/collections/collections.component';
import { KotjPage } from '../pages/collections/kotj/kotj.component';
import { AboutPage } from 'src/pages/about/about.component';
import { CharityPage } from 'src/pages/charity/charity.component';
import { FaqPage } from 'src/pages/faq/faq.component';
import { GahPage } from 'src/pages/collections/gah/gah.component';


const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'collections', component: CollectionsPage },
  { path: 'collections/kotj', component: KotjPage },
  { path: 'collections/gah', component: GahPage },
  { path: 'about', component: AboutPage },
  { path: 'charity', component: CharityPage },
  { path: 'faq', component: FaqPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
