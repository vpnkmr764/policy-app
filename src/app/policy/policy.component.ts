import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  loggedInUser: User = new User();
  message : string ="";
  routerA: Router;

  constructor(private router: Router) {
    this.routerA = router;
  }

  ngOnInit(): void {
    var loggedInCustomerId = JSON.parse(localStorage.getItem('LoggedInUser') || '');
    
    if (loggedInCustomerId != null) {
      var userStr = localStorage.getItem(loggedInCustomerId);
      var user = JSON.parse(userStr!);
      this.loggedInUser = user;
    }
    this.message ='';
  }

  payPremium(){
     this.message = "Payment successfully done";
  }
}