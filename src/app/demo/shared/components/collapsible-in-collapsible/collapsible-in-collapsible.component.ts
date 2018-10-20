import { Component } from '@angular/core';

@Component({
  selector: 'ngx-collapsible-in-collapsible',
  templateUrl: './collapsible-in-collapsible.component.html',
  styleUrls: ['./collapsible-in-collapsible.component.scss']
})
export class CollapsibleInCollapsibleComponent {
  open = false;

  constructor() {}

  toggle() {
    this.open = !this.open;
  }
}
