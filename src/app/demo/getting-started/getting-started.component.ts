import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

  public importCode = `import { NgxHeightToggleModule } from 'ngx-height-toggle';

@NgModule({
  declarations: [MyComponent, ...],
  imports: [NgxHeightToggleModule, ...],
})
export class MyModule { }`;

  constructor() { }

}
