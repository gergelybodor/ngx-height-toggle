import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NgxHeightToggleService {

  public contentChanges: ReplaySubject<any> = new ReplaySubject();

  constructor() { }

  public contentChange(): void {
    this.contentChanges.next(null);
  }

}
