import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.css']
})
export class ToggleModeComponent implements OnInit {
  public faMoon = faMoon
  public faSun = faSun
  public mode!: string

  constructor() { }

  ngOnInit(): void {
    if(matchMedia('(prefers-color-scheme: dark)').matches) this.mode = "Dark"
    else this.mode = "Light"
  }

  changeMode(){
    if(this.mode === "Dark") this.mode = "Light"
    else this.mode = "Dark"
  }

}
