import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerRoutes: { path: string; title: string }[];
  constructor() {}

  ngOnInit() {
    this.headerRoutes = [
      { path: '/', title: 'Home' },
      { path: '/post/1', title: 'Post 1' },
      { path: '/post/2', title: 'Post 2' },
    ];
  }
}
