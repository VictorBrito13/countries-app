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
  public mode = 'Dark'
  private documentElement = window.document.documentElement

  constructor() { }

  ngOnInit(): void {

  }

  changeMode(){
    const styleElement = this.documentElement.style

    function changeColor(customPorp: string, color: string): void {
      styleElement.setProperty(customPorp, color)
    }

    if(this.mode === "Dark"){
      this.mode = "Light"
      changeColor('--bg', 'hsl(0, 0%, 98%)')
      changeColor('--bg-elements', 'hsl(0, 0%, 100%)')
      changeColor('--color-text', 'hsl(200, 15%, 8%)')
      changeColor('--color-input', 'hsl(0, 0%, 52%)')
    }
    else{
      this.mode = "Dark"
      changeColor('--bg', 'hsl(207, 26%, 17%)')
      changeColor('--bg-elements', 'hsl(209, 23%, 22%)')
      changeColor('--color-text', 'hsl(0, 0%, 100%)')
      changeColor('--color-input', 'hsl(0, 0%, 100%)')
    }
  }

}
