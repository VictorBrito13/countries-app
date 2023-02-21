import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//*Components
import { AppComponent } from './app.component';
import { SearchCountryComponent } from './components/search-country/search-country.component';
import { ToggleModeComponent } from './components/toggle-mode/toggle-mode.component';
import { CountryComponent } from './components/country/country.component';

//*Pages
import { AllCoutriesComponent } from './pages/all-coutries/all-coutries.component';
import { CountyPComponent } from './pages/county-p/county-p.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    AllCoutriesComponent,
    SearchCountryComponent,
    ToggleModeComponent,
    CountryComponent,
    CountyPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
