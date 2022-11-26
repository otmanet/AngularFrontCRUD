import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth-service';
import { TokenStorageService } from '../Services/token-storage-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFaild = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isSuccessful = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, email, password } = this.form
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFaild = true;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFaild = true;
      }
    })
  }

}
