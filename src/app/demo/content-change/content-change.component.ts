import { Component, OnInit } from '@angular/core';
import { IpsumService } from '../shared/services/ipsum/ipsum.service';

@Component({
  selector: 'app-content-change',
  templateUrl: './content-change.component.html',
  styleUrls: ['./content-change.component.scss']
})
export class ContentChangeComponent implements OnInit {
  public open = false;
  public paragraph1: string;
  public paragraph2: string;
  public paragraph3: string;

  constructor(private service: IpsumService) {}

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
  }
}
