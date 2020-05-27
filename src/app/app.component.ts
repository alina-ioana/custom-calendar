import {Component, OnInit} from '@angular/core';
import StorageHelper from "./core/helpers/storage.helper";
import {AccountService} from "./core/api/account.service";
import {Router} from "@angular/router";
import {UserService} from "./core/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = true;

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    StorageHelper.getToken()
      ? this.getUserDetails()
      : this.loading = false;
  }

  getUserDetails() {
    this.accountService.getUserDetails().subscribe(user => {
      this.userService.setCurrentUser(user);
      this.loading = false;
    }, error => {
      StorageHelper.killSession();
      this.loading = false;
      this.router.navigate(['/authentication']);
    });
  }
}
