import { Component } from '@angular/core';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public open = false;

  constructor() {}

  public toggleNavBar(open?: boolean) {
    if (open === undefined) {
      this.open = !this.open;
    } else {
      this.open = open;
    }
  }
}
