import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  public constructor() {
    alert("start");
  }

}
