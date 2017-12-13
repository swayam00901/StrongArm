import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthenticationService, User} from '../shared/services/authentication.service';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';

@Component({
    selector: 'app-login',
    providers: [AuthenticationService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public user = new User('','');
    public errorMsg = '';
    public working = false;
    submitAttempt: boolean = false;
    template: string = '<img src="assets/images/loading.gif">';//"assets/images/loading.gif" ;
   
    constructor(public router: Router, private _service:AuthenticationService ,   private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {}

    ngOnInit() {
       
    }

    onLoggedin() {
        let loggedIn  = false;
        this.working  = true;
       // this.ng4LoadingSpinnerService.show();
       if(this.user)
       {
        this.submitAttempt = true;
        if(!this._service.login(this.user)){
            this.errorMsg = 'Incorrect User ID/Password. Please try again!';
        }
        else
        this.router.navigate(['']);
       }
       else
       this.submitAttempt = false;
      
       

       
        
    }
}
