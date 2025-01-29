import { Component, effect } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectKService } from '../project-k.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isAuthenticated: boolean = false;

  constructor(private router: Router, public service: ProjectKService) {
    effect(() => {
      this.isAuthenticated = this.service.isAuthenticated(); // Update auth state
    });
  }

  public userLogout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
