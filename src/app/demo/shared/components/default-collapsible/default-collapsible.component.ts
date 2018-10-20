import { Component } from '@angular/core';

@Component({
  selector: 'ngx-default-collapsible',
  templateUrl: './default-collapsible.component.html',
  styleUrls: ['./default-collapsible.component.scss']
})
export class DefaultCollapsibleComponent {
  open = false;
  height = 300;

  constructor() {}

  toggle() {
    this.open = !this.open;
  }

  addToHeight() {
    const step = 100;
    this.height += step;
  }

  removeFromHeight() {
    const step = 100;
    const minHeight = 300;
    this.height = this.height - step < minHeight ? minHeight : this.height - step;
  }
}
