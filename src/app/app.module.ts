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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormatLargeNumbersPipe } from './pipes/format-large-numbers.pipe';
import { SearchCountriesComponent } from './components/search-countries/search-countries.component';
import { CountriesComponent } from './components/countries/countries.component';
import { NoCountriesFoundComponent } from './components/no-countries-found/no-countries-found.component';
import { FilterCoutriesComponent } from './components/filter-coutries/filter-coutries.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCoutriesComponent,
    SearchCountryComponent,
    ToggleModeComponent,
    CountryComponent,
    CountyPComponent,
    FormatLargeNumbersPipe,
    SearchCountriesComponent,
    CountriesComponent,
    NoCountriesFoundComponent,
    FilterCoutriesComponent
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
