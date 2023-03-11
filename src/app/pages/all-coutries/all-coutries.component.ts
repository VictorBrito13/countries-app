import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpCountriesService } from 'src/app/services/http-countries.service';
import { db } from 'src/app/indexdb/countriesDB';

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
  public requestError = false

  constructor(
    private _http: HttpCountriesService
  ) {
    this.countries = []
    this.countriesLazy = []
    this.countriesPart = []
    this.requestLimit = 50
  }

  async ngOnInit(): Promise<void> {
    if((await db.countries.toArray()).length > 0){
      const elements = await db.countries.toArray()
      this.countries = elements
      this.countriesPart = this.countries.splice(0, this.requestLimit)
      this.countriesLazy = [...this.countriesPart]
    }else{
      this.getCountries()
    }
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
      next: async res => {
        this.countries = res
        this.countriesPart = this.countries.splice(0, this.requestLimit)
        this.countriesLazy = [...this.countriesPart]
        this.addCountriesToIndexedDB(res)
      },
      error: err => this.requestError = true
    })
  }

  trackByArea(index:number, country:any){
    return country.area
  }

  addCountriesToIndexedDB(items: any[]){
    db.transaction('rw', db.countries, async () => {
      await db.countries.bulkAdd(items)
    })
  }

}
