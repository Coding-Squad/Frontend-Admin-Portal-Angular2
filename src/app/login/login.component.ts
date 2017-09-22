import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username':'', 'password' : ''};
  private loggedIn = false;
  private loginError:boolean = false;

  constructor(private loginService: LoginService) { }

  onSubmit() {
  	this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
  		res => {
  			console.log(res);
  			localStorage.setItem("xAuthToken", res.json().token);
  			this.loggedIn = true;
				console.log("connexion succeed");
				location.reload();
				
  		},
  		error => {
  			console.log("connexoion failed");
			  this.loginError=true;
  		}
  	);
  }

  ngOnInit() {
		this.loginService.checkSession().subscribe(
			res => {
				this.loggedIn=true;
				console.log("session ok");
			},
			error => {
				this.loggedIn=false;
				console.log("session error");
			}
		);
  }

}
