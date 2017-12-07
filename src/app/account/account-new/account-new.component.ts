import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { Player } from '../../model/player.model';
import {AccountService} from "../account.service";

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {
  @ViewChild('f') accountForm: NgForm;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

  ngOnInit() {
  }
  onSubmit() {
    let postAccount = this.accountForm.value;
    this.accountService.addUser(postAccount)
      .subscribe(
        (response) => {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      )
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
