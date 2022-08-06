import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ3R0YNwDFPOojVfnrZk79hLotsavQDO0",
  authDomain: "angular-poke.firebaseapp.com",
  projectId: "angular-poke",
  storageBucket: "angular-poke.appspot.com",
  messagingSenderId: "107887336607",
  appId: "1:107887336607:web:378ded06f5a032f3c816aa"
};

const app = initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  getAuth() {
    return getAuth(app);
  }
}
