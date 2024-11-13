// user-content.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {
  user: firebase.User | null = null;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {
    // Subscribe to the authentication state
    this.auth.authState.subscribe(user => {
      this.user = user; // Set the user if logged in, null otherwise
    });
  }

  signInWithGoogle(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider).catch(error => {
      console.error('Error during Google sign-in:', error);
    });
  }

  signOut(): void {
    this.auth.signOut().catch(error => {
      console.error('Error during sign-out:', error);
    });
  }
}
