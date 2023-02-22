import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-county-p',
  templateUrl: './county-p.component.html',
  styleUrls: ['./county-p.component.css']
})
export class CountyPComponent implements OnInit {
  @Input() country: any

  constructor() { }

  ngOnInit(): void {
  }

}
