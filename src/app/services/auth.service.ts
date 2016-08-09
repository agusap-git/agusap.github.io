import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';

// Avoid name not found warnings
declare var Auth0: any;

@Injectable()
export class Auth {
  // Configure Auth0
  auth0 = new Auth0({
    domain: 'agusap.auth0.com',
    clientID: 'ZW57eLzcaibrXlgq4aMSyLjSKOedGtai',
    callbackOnLocationHash: true,
    callbackURL: 'http://localhost:4200/home',
  });

  constructor(private _router: Router) {
    var result = this.auth0.parseHash(window.location.hash);

    if (result && result.idToken) {

      localStorage.setItem('id_token', result.idToken);

      this.auth0.getProfile(result.idToken, function (err, profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
      });

      this._router.navigate(['home']);

    } else if (result && result.error) {
      alert('error: ' + result.error);
    }
  }

  public signUp(username, password) {
    this.auth0.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public login(username, password) {
    console.log(username + " - " + password);
    this.auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public googleLogin() {
    this.auth0.login({
      connection: 'google-oauth2'
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  };
}
