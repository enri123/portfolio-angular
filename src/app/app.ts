import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Toolbar } from './toolbar/toolbar';
import { CustomSidenav } from './custom-sidenav/custom-sidenav';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, Toolbar, CustomSidenav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    constructor(
    public location: Location
  ) {}
  protected readonly title = signal('portfolio-angular');
}
