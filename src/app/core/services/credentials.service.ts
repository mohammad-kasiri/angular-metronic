import { Injectable } from '@angular/core';
import { Router }     from '@angular/router'

@Injectable({
  providedIn: 'root'
})


export class CredentialService {

  constructor(private router : Router){}
  private storageKey : string = 'user-token';

  forAdmin() {
    this.storageKey = 'admin-token';
    return this;
  }

  forUser() {
    this.storageKey = 'user-token';
    return this;
  }

  setToken(token : string) {
    localStorage.setItem(this.storageKey , token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  whoLoggedIn () {
    this.forUser();
    if ( this.getToken() !== null ) return 'user';

    this.forAdmin();
    if ( this.getToken() !== null ) return 'admin';

    return false;
  }

  isLoggedIn () : boolean {
    return this.getToken() !== null;
  }

  logout()
  {
    this.forUser();
    localStorage.removeItem(this.storageKey);

    this.forAdmin();
    localStorage.removeItem(this.storageKey);

    this.router.navigate(['/']);
  }

}

