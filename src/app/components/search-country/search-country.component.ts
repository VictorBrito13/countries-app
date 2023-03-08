import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { SearchParamsService } from 'src/app/services/search-params.service';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit, AfterViewInit {
  public faSearch = faSearch

  @ViewChild('searchInput') searchInput!: ElementRef

  constructor(
    private _router: Router,
    private _searchParams: SearchParamsService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this._searchParams.getDestroy$().subscribe({
        next: () => this.searchInput.nativeElement.value = ''
      })
  }

  search(value: string): void {
    this._router.navigate(['countries/search'], { queryParams: {'country': value} })
    if(value.length === 0) this._router.navigate(['countries/search'])
  }

  filterChange(region: string){
    this._router.navigate(['countries/filter'], { queryParams: { 'region' : region } })
  }

}
