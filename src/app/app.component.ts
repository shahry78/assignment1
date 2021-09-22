import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services';
import { User, Role } from './models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isSuperAdmin() {
        return this.currentUser && (this.currentUser.role === Role.SuperAdmin );
    }

    get isAdmin() {
        return this.currentUser && (this.currentUser.role === Role.SuperAdmin || this.currentUser.role === Role.GroupAdmin);
    }

    get isAdminOrAssis() {
        return this.currentUser && (this.currentUser.role === Role.SuperAdmin || this.currentUser.role === Role.GroupAdmin || this.currentUser.role === Role.GroupAssis);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}