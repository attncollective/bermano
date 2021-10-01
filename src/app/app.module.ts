import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule, MdbInput } from 'angular-bootstrap-md';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Navigation } from '../components/navigation/navigation.component'
import { Footer } from '../components/footer/footer.component';

import { HomePage } from '../pages/home/home.component'
import { CollectionsPage } from '../pages/collections/collections.component';
import { KotjPage } from '../pages/collections/kotj/kotj.component';
import { GahPage } from 'src/pages/collections/gah/gah.component';
import { AboutPage } from 'src/pages/about/about.component';
import { CharityPage } from 'src/pages/charity/charity.component';
import { FaqPage } from 'src/pages/faq/faq.component';
import { ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Footer,
    HomePage,
    CollectionsPage,
    KotjPage,
    GahPage,
    AboutPage,
    CharityPage,
    FaqPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MdbCheckboxModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
