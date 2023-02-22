import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpCountriesService } from 'src/app/services/http-countries.service';

@Component({
  selector: 'app-all-coutries',
  templateUrl: './all-coutries.component.html',
  styleUrls: ['./all-coutries.component.css']
})
export class AllCoutriesComponent implements OnInit, AfterViewInit {
  private countries: any[]
  public countriesLazy: any[]
  private countriesPart: any[]
  private requestLimit: number

  constructor(
    private _http: HttpCountriesService
  ) {
    this.countries = []
    this.countriesLazy = []
    this.countriesPart = []
    this.requestLimit = 50
  }

  ngOnInit(): void {
    this.getCountries()
  }

  ngAfterViewInit(): void {
      this.scrollListener()
  }


  /**
   * @description Makes the **countriesLazy** (array that gonna be rendered) lazy load
  */
  scrollListener(): void {
    window.addEventListener('scroll', e => {
      if(document.documentElement.getBoundingClientRect().bottom <= 2000){
        const arrAux = this.countries.splice(0, this.requestLimit)
        this.countriesPart = this.countriesLazy.concat(arrAux)
        this.countriesLazy = [...this.countriesPart]
      }
    })
  }

  getCountries(): void {
    this._http.getCountries().subscribe({
      next: res => {
        this.countries = res
        this.countriesPart = this.countries.splice(0, this.requestLimit)
        this.countriesLazy = [...this.countriesPart]
      },
      error: err => console.log(err)
    })
  }

  trackByArea(index:number, country:any){
    return country.area
  }

}
