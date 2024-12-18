import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialAuthService, GoogleLoginProvider],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'googleAuthenticationWithCloudFunctions';

  constructor(private authService: SocialAuthService) { }
  
  ngOnInit(): void {
  }
  

  signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
    console.log(user);
  });
}
}
