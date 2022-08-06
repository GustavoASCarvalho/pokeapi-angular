import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/data/services/firebase.service';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { UserService } from 'src/app/shared/data/services/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = '';
  auth;
  user = {} as User;


  constructor(private firebaseService: FirebaseService, private userService: UserService, private router: Router) {
    this.auth = this.firebaseService.getAuth();
  }

  ngOnInit(): void {
  }

  entrar() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(this.auth, provider)
      .then(result => {
        this.user = result.user;
        this.userService.setUser(this.user);
        this.router.navigateByUrl('');
      })
      .catch(error => {
        this.error = error.message;
      })
  }
}
