import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../core/api/account.service";
import {UserService} from "../../core/services/user.service";
import StorageHelper from "../../core/helpers/storage.helper";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    public userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    this.loading = true;

    this.accountService.login(this.loginForm.getRawValue()).subscribe(user => {
      this.userService.setCurrentUser(user);
      StorageHelper.saveToken(user.token);
      this.loading = false;
      this.router.navigate(['/days-off/']);
    }, error => {

    });
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

}
