import { Component, OnInit } from '@angular/core';
import { IpsumService } from '../shared/services/ipsum/ipsum.service';
import { NgxHeightToggleService } from '../../modules/ngx-height-toggle/ngx-height-toggle.service';

@Component({
  selector: 'app-content-change',
  templateUrl: './content-change.component.html',
  styleUrls: ['./content-change.component.scss']
})
export class ContentChangeComponent implements OnInit {

  public html = `<button (click)="toggle()">Toggle height</button>
<button (click)="updateContent()" [disabled]="!open">Update content</button>

<div class="section">
    <p>{{paragraph1}}</p>
</div>
<div class="section collapsible" ngxHeightToggle [open]="open">
    <p>{{paragraph2}}</p>
</div>
<div class="section">
    <p>{{paragraph3}}</p>
</div>`;

  public scss = `.section {
    background-color: #ffffff;
    border: 1px solid #c2c2c2;

    &.collapsible {
        background-color: #001932;
        color: #ffffff;
        overflow: hidden;
        transition: height 0.5s ease-out;
    }

    p {
        margin: 10px;
    }
}`;

  public ts = `import { NgxHeightToggleService } from 'ngx-height-toggle';

export class ContentChangeComponent {

    public open = false;
    public paragraph1 = 'some text';
    public paragraph2 = 'some text';
    public paragraph3 = 'some text';

    constructor(private heightToggleService: NgxHeightToggleService) { }

    public toggle(): void {
        this.open = !this.open;
    }

    public updateContent(): void {
        this.paragraph2 = 'some other text';
        this.heightToggleService.contentChange();
    }

}`;

  public open = false;
  public paragraph1: string;
  public paragraph2: string;
  public paragraph3: string;

  constructor(private service: IpsumService, private heightToggleService: NgxHeightToggleService) { }

  ngOnInit(): void {
    this.paragraph1 = this.service.getIpsum();
    this.paragraph2 = this.service.getIpsum();
    this.paragraph3 = this.service.getIpsum();
  }

  public toggle(): void {
    this.open = !this.open;
  }

  public updateContent(): void {
    this.paragraph2 = this.service.getDifferentIpsum(this.paragraph2);
    this.heightToggleService.contentChange();
  }

}
