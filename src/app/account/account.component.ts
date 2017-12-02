import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
