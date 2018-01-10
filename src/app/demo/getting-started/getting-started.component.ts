import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

  public importCode = `import { HeightToggleModule } from 'ngx-height-toggle';

@NgModule({
  declarations: [MyComponent, ...],
  imports: [HeightToggleModule, ...],
})
export class MyModule { }`;

  constructor() { }

}
