import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public open = false;

  constructor() { }

  public toggleNavBar() {
    this.open = !this.open;
  }

}
