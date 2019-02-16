import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
 user:any;
  constructor(private authService: AuthService) { }
  glogin()
  {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  flogin()
  {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  logout()
  {
    this.authService.signOut();
    this.user="";
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user)
      
    });
  }

}
