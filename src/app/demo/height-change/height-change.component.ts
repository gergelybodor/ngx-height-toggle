import { Component, OnInit } from '@angular/core';
import { IpsumService } from '../shared/services/ipsum/ipsum.service';

@Component({
  selector: 'app-height-change',
  templateUrl: './height-change.component.html',
  styleUrls: ['./height-change.component.scss']
})
export class HeightChangeComponent implements OnInit {

  public html = `<button (click)="toggle()">Toggle height</button>

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

  public ts = `export class HeightChangeComponent {

    public open = false;
    public paragraph1 = 'some text';
    public paragraph2 = 'some text';
    public paragraph3 = 'some text';

    constructor() { }

    public toggle(): void {
        this.open = !this.open;
    }

}`;

  public open = false;
  public paragraph1: string;
  public paragraph2: string;
  public paragraph3: string;

  constructor(private service: IpsumService) { }

  ngOnInit(): void {
    this.paragraph1 = this.service.getIpsum();
    this.paragraph2 = this.service.getIpsum();
    this.paragraph3 = this.service.getIpsum();
  }

  public toggle(): void {
    this.open = !this.open;
  }

}
