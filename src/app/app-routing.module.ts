import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoutriesComponent } from './pages/all-coutries/all-coutries.component';
import { CountyPComponent } from './pages/county-p/county-p.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all-countries'
  },
  {
    path: 'all-countries',
    component: AllCoutriesComponent
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
