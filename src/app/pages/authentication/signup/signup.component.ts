import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, switchMap, take } from 'rxjs';
import { IdentityService } from 'src/app/core/services/identity.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  error = '';
  
  signupForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private identity: IdentityService,
    private router: Router,
    ) { }

    onSubmit() {
      this.identity.signup(
        this.signupForm.get('firstname')?.value!,
        this.signupForm.get('lastname')?.value!,
        this.signupForm.get('username')?.value!,
        this.signupForm.get('password')?.value!
      ).pipe(
        take(1),
        switchMap(() => this.identity.login(this.signupForm.get('username')?.value!, this.signupForm.get('password')?.value!)),
        catchError((error) => {
          this.error = 'Something went wrong';
          throw error;
        }),
      ).subscribe(() => this.router.navigate(['/']));
    }
}
