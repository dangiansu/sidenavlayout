import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    HeaderComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements AfterViewInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  isSidenavOpened: boolean = true;

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.drawer.opened = true;
    this.observer.observe(['(max-width: 787px)']).subscribe((result) => {
      if (result?.matches) {
        this.drawer.mode = 'over';
        this.drawer.close();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
      }
      this.isSidenavOpened = this.drawer.opened;
    });
    this.cdr.detectChanges();
  }

  toggleSideNav() {
    if (this.drawer.opened) {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
    this.isSidenavOpened = this.drawer.opened;
  }
}
