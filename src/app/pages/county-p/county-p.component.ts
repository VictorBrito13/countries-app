import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpCountriesService } from 'src/app/services/http-countries.service';
import { ActivatedRoute } from '@angular/router';
import { ICountry } from 'src/app/interfaces/country';

@Component({
  selector: 'app-county-p',
  templateUrl: './county-p.component.html',
  styleUrls: ['./county-p.component.css']
})
export class CountyPComponent implements OnInit, AfterViewInit {
  public faArrow = faArrowLeft
  public country!: ICountry

  constructor(
    private _http: HttpCountriesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._activatedRoute.params.subscribe({
      next: param => {
        this.getCountry(param['name'])
      },
      error: err => console.log(err)
    })
  }

  getCountry(name: string): void {
    this._http.getCountry(name).subscribe({
      next: res => {
        this.country = res[0]
        console.log(res[0].currencies)
      },
      error: err => console.log(err)
    })
  }

}
