import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    AppRoutingModule,
    TransferHttpCacheModule,
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
