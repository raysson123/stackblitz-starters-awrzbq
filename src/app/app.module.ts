import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { PagesComponent } from './components/pages/pages.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BodyComponent } from './components/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    BodyComponent,
    SublevelMenuComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
