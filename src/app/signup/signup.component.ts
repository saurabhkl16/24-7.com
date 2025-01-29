import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  public signupForm = new FormGroup({
    signupUsername: new FormControl(''),
    signupPassword: new FormControl(''),
    mobileNumber: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  public onSubmitSignup() {
    console.log(this.signupForm.value);
  }

  public openLoginForm() {
    this.router.navigate(['/login']);
  }
}
