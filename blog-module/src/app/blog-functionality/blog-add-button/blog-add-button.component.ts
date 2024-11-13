// blog-add-button.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-blog-add-button',
  templateUrl: './blog-add-button.component.html',
  styleUrls: ['./blog-add-button.component.scss']
})
export class BlogAddButtonComponent implements OnInit {
  isLoggedIn = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {
    this.auth.authState.subscribe((user: firebase.User | null) => {
      this.isLoggedIn = !!user; 
    });
  }
}
