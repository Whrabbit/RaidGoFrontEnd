import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {

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
