import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { FilterCoutriesComponent } from './components/filter-coutries/filter-coutries.component';
import { SearchCountriesComponent } from './components/search-countries/search-countries.component';
import { AllCoutriesComponent } from './pages/all-coutries/all-coutries.component';
import { CountyPComponent } from './pages/county-p/county-p.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'countries/all'
  },
  {
    path: 'countries',
    component: CountriesComponent,
    children: [
      {
        path: 'all',
        component: AllCoutriesComponent
      },
      {
        path: 'search',
        component: SearchCountriesComponent
      },
      {
        path: 'filter',
        component: FilterCoutriesComponent
      }
    ]
  },
  {
    path: 'country/:name',
    component: CountyPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
