import { Component, OnInit } from '@angular/core';
import {AccountService} from "../account/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;

  constructor(private router: Router,
              private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.loginEvent
      .subscribe((result) => {
        this.loggedIn = result;
      })
  }
  onLogout(){
    this.accountService.logOut();
    this.router.navigate(['login']);
  }

}
