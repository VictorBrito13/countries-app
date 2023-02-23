import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.css']
})
export class ToggleModeComponent implements OnInit {
  public faMoon = faMoon
  public mode = "Dark"

  constructor() { }

  ngOnInit(): void {
  }

}
