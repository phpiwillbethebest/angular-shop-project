import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HeroComponent } from './components/pages/home/hero/hero.component';
import { PerksComponent } from './components/pages/home/perks/perks.component';
import { BestSellsComponent } from './components/pages/home/best-sells/best-sells.component';
import { InteriorGalleryComponent } from './components/pages/home/interior-gallery/interior-gallery.component';
import { HowToCareComponent } from './components/pages/home/how-to-care/how-to-care.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    AboutUsComponent,
    ContactComponent,
    HeroComponent,
    PerksComponent,
    BestSellsComponent,
    InteriorGalleryComponent,
    HowToCareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
