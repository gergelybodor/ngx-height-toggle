import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-in-collapsible',
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
