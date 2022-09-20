import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  loggedIn = false;
  constructor(private authService: MsalService ){}
  ngOnInit(): void {
    this.checkAcc();
  }
  private checkAcc(){
    this.loggedIn = this.authService.instance.getAllAccounts().length > 0;
  }
   login(){
      this.authService.loginPopup()
        .subscribe(response => {
          this.authService.instance.setActiveAccount(response.account);
          this.checkAcc();
        });
   }
   logout(){
    this.authService.logout();
   }
}
