import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectKService } from '../project-k.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public errorMessage: string = '';
  showPassword: boolean = false;
  isValisLoginDetails: boolean = true;

  constructor(private router: Router, private service: ProjectKService) {}

  public async onSubmitLogin(loginDetails: any) {
    if (loginDetails.valid == true) {
      this.service.UserLogin(loginDetails.value).subscribe({
        next: (loginResponse) => {
          if (loginResponse.status === 'SUCCESS') {
            this.service.showSuccessToaster(loginResponse.message);
            this.service.loginSuccess(); // Update auth state
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = loginResponse.message;
            this.service.showErrorToaster(this.errorMessage);
          }
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = 'Login failed. Please try again.';
          this.service.showErrorToaster(this.errorMessage);
        },
      });
    } else {
      this.isValisLoginDetails = false;
    }
  }

  public guestLogin() {
    this.router.navigate(['/home']);
  }

  public signup() {
    this.router.navigate(['/signup']);
  }

  public togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
