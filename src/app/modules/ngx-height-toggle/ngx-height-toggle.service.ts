import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class NgxHeightToggleService {

  public contentChanges: ReplaySubject<any> = new ReplaySubject();

  constructor() { }

  public contentChange(): void {
    this.contentChanges.next(null);
  }

}
