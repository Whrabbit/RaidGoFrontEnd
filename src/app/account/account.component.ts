import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AccountService} from "./account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  wrongPassword: boolean;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

  ngOnInit() {
  }
  onSubmit() {
    let loginAccount = this.loginForm.value;
    console.log(this.loginForm.value);
    this.accountService.loginUser(loginAccount)
      .subscribe(
        (response) => {
          if (response.status === 200){
            this.router.navigate(['myevents']);

          } else {
            this.wrongPassword = true;
          }
        }
      )
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
