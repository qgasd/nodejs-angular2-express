import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as ac from 'activedirectory';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any={}
    constructor(public router: Router) { }

    ngOnInit() { }

    onLoggedin() {
        alert(this.model.name);
        localStorage.setItem('isLoggedin', 'true');
        if(this.model.name != null && this.model.password){
            this.router.navigate(['/dashboard']);
        }
        //var config = { url: 'ldap://172.21.21.218:389',
              // baseDN: 'dc=scrcu,dc=com',
               //username: '9527@srcu.com',
               //password: 'QG123_for123' }
//var ad =  ac(config);

         // ad.authenticate(this.model.name, this.model.password, function(err:any, auth:any) {
            //if (err) {
          //      console.log('ERROR: '+JSON.stringify(err));
             //   return;
          //  }
  
             //if (auth) {
              //  console.log('Authenticated!');
               // this.router.navigate(['/dashboard']);
            // }
               // else {
                     //console.log('Authentication failed!');
                // }
       // });


    }

}
