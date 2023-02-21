import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {
  public faSearch = faSearch

  constructor() { }

  ngOnInit(): void {
  }

}
