import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: any

  constructor() { }

  ngOnInit(): void {
  }

}
