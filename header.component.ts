import { Component } from "@angular/core";

import { AuthService } from "./auth.service";

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isAuthenticated = false;

    constructor(private authService: AuthService) {
        this.authService.isAuthenticated().subscribe(
            authStatus => this.isAuthenticated = authStatus
        );
    }

    isAuth() {
        return this.isAuthenticated;
    }

    onLogout() {
        this.authService.logout();
    }
}
