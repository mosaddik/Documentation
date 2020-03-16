import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NavBottomLogComponent } from './shared/nav-bottom-log/nav-bottom-log.component';
import { TopNavBarComponent } from './shared/top-nav-bar/top-nav-bar.component';
import { PageTileComponent } from './shared/page-tile/page-tile.component';
import { PageCardsComponent } from './shared/page-cards/page-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBottomLogComponent,
    TopNavBarComponent,
    PageTileComponent,
    PageCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
