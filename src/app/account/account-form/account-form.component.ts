import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AccountService} from "../account.service";
import {Player} from '../../model/player.model';
import { Observable } from 'rxjs/Observable';
import { AlertChangesService } from '../../interface/alert-changes.service'

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit, AlertChangesService {
  @ViewChild('f') accountForm: NgForm;
  editAccount: Player;

  loggedIn = false;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

  ngOnInit() {
    this.loggedIn = this.accountService.loggedIn;

      if(this.ownAccount()){
        this.accountService.getAccount(this.accountService.user.id)
          .subscribe((account) => {
            this.editAccount = account.json();
            setTimeout(() => {
              this.accountForm.setValue({
                username: this.editAccount.username,
                password: this.editAccount.password,
                level: this.editAccount.level,
                gymColor: this.editAccount.gymColor
              });
            },1)
          });

    } else {
        setTimeout(() => {
          this.accountForm.setValue({
            username: '',
            password: '',
            level: '',
            gymColor: ''
          });
        },1)
      }
  }
  onSubmit() {
    if (this.ownAccount()) {
      let postAccount = this.accountForm.value;
      this.accountService.updateUser(this.editAccount.id, postAccount)
        .subscribe(
          (response) => {
            this.submitted = true
            this.router.navigate(['myevents']);
          }
        )

    } else {
      let postAccount = this.accountForm.value;
      this.accountService.addUser(postAccount)
        .subscribe(
          (response) => {
            this.router.navigate(['login']);
          }
        )
    }

  }
  onCancel() {
    this.router.navigate(['../']);
  }

  ownAccount() {
    return window.location.href.indexOf('account/settings') !== -1;
  }

  onDelete(){
    this.accountService.deleteUser(this.accountService.user.id)
      .subscribe(
        (response) => {
          this.accountService.logOut();
          this.router.navigate(['/']);
        })
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.editAccount.username !==  this.accountForm.value.username||
        this.editAccount.password !==  this.accountForm.value.password||
        this.editAccount.level !==  this.accountForm.value.level||
        this.editAccount.gymColor !== this.accountForm.value.gymColor)&& !this.submitted)  {
      return confirm('Wil je de pagina verlaten zonder op te slaan?');
    } else {
      return true;
    }
  }


}
