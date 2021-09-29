import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `<div style="padding: 100px" (click)="loadLazy()">Home</div>`,
})
export class HomeComponent {
  constructor(private router: Router) {}

  public loadLazy() {
    console.log('lazy load')
    this.router.navigateByUrl('/home/home');
  }
}