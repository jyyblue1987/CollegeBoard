namespace CollegeBoard.Services {

  'use strict';

  export class Auth0 {

    public static ID = "Auth0";

    public static get $inject(): string[] {
      return [
        '$rootScope', 'lock', 'authManager', 'jwtHelper'
      ];
    }

    public userProfile = {};

    constructor(private $rootScope : ng.IRootScopeService, private lock, private authManager, private jwtHelper) {

      this.userProfile = JSON.parse(localStorage.getItem('profile')) || {};

    }
    public login() {
      this.lock.show();
    }

    // Logging out just requires removing the user's
    // id_token and profile
    public logout() {
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
      this.authManager.unauthenticate();
      this.userProfile = {};
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    public registerAuthenticationListener() {
      this.lock.on('authenticated', (authResult) => {
        localStorage.setItem('id_token', authResult.idToken);
        this.authManager.authenticate();
        this.lock.hide();

        // Redirect to default page
        location.hash = '#/';

        this.lock.getProfile(authResult.idToken, function (error, profile) {
          if (error) {
            console.log(error);
          }

          localStorage.setItem('profile', JSON.stringify(profile));

        });
      });
    }

    public checkAuthOnRefresh() {
      var token = localStorage.getItem('id_token');
      if (token) {
        if (!this.jwtHelper.isTokenExpired(token)) {
          if (!(this.$rootScope as any).isAuthenticated) {
            this.authManager.authenticate();
          }
        }
      }
    }
  }
}
