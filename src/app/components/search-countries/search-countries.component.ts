import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchParamsService } from 'src/app/services/search-params.service';
import { ActivatedRoute } from '@angular/router';
import { HttpCountriesService } from 'src/app/services/http-countries.service';

@Component({
  selector: 'app-search-countries',
  templateUrl: './search-countries.component.html',
  styleUrls: ['./search-countries.component.css']
})
export class SearchCountriesComponent implements OnInit, OnDestroy {
  public countriesFound!: any[]
  public noCountries = true

  constructor(
    private _searchParams: SearchParamsService,
    private _ActivatedRoute: ActivatedRoute,
    private _http: HttpCountriesService
  ) { }

  ngOnInit(): void {
    this.getParams()
  }

  ngOnDestroy(): void {
    this._searchParams.setDestroy()
  }

  getParams(): void {
    this._ActivatedRoute.queryParams.subscribe({
      next: params => {
        this._http.getCountry(params['country']).subscribe({
          next: res => {
            this.countriesFound = res
            this.noCountries = false
          },
          error: err => {
            if(err.status === 404){
              this.noCountries = true
              this.countriesFound = []
            }
          }
        })
      }
    })
  }

  trackByArea(index: number, country: any){
    return country.area
  }

}
