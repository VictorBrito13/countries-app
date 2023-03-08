import { Component, OnInit } from '@angular/core';
import { HttpCountriesService } from 'src/app/services/http-countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-coutries',
  templateUrl: './filter-coutries.component.html',
  styleUrls: ['./filter-coutries.component.css']
})
export class FilterCoutriesComponent implements OnInit {
  public countries!: any[]
  public noCountries = true

  constructor(
    private _http: HttpCountriesService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe({
      next: params => {
        this.getCountries(params['region'])
      }
    })
  }

  getCountries(region: string): void {
    this._http.getCountriesByRegion(region).subscribe({
      next: res => {
        this.countries = res
        this.noCountries = false
      },
      error: err => {
        if(err.status === 404) {
          this.noCountries = true
          this.countries = []
        }
      }
    })
  }

}
