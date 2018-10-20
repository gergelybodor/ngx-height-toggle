import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appTitle = 'ngx-height-toggle';

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(this.appTitle);
  }
}
