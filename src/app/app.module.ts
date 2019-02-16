//import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/Forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MypipePipe } from './mypipe.pipe';
import { MyserService } from './myser.service';
//import {NgxPaginationModule} from 'ngx-pagination';
import { MydirDirective } from './mydir.directive';
import { MystuDirective } from './mystu.directive';
import { CookComponent } from './cook/cook.component';
import { SocialComponent } from './social/social.component';
//import { CookieService } from 'ngx-cookie-service';
import { CarosalComponent } from './carosal/carosal.component';
//import { NgDatepickerModule } from 'ng2-datepicker';
import {ActivGuard} from './activ.guard';
import {UserService} from './user.service';
// import {
//   SocialLoginModule, 
//   AuthServiceConfig,
//   GoogleLoginProvider, 
//   FacebookLoginProvider, 
// } from 'angular4-social-login';
// import {DatepickerModule} from 'ngx-date-picker';
//define routes
// const CONFIG = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('1045362442345-8i7e9dqchi6bh5jvh4pnu03lnc9k10rb.apps.googleusercontent.com')
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('Facebook-App-Id')
//   }
// ]);
const rott:Routes=[
  {path:'',component:FrontComponent},
  {path:'about',component:AboutComponent,
  canActivate: [ActivGuard]},
  {path:'cook',component:CookComponent},
  {path:'contact',component:ContactComponent},
  {path:'social',component:SocialComponent},
  {path:'carasol',component:CarosalComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    FrontComponent,
    AboutComponent,
    ContactComponent,
    MypipePipe,
    MydirDirective,
    MystuDirective,
    CookComponent,
    SocialComponent,
    CarosalComponent
  ],
  imports: [
    // SocialLoginModule.initialize(CONFIG)
    FormsModule,BrowserModule,HttpModule,RouterModule.forRoot(rott)
  ],
  providers: [UserService,ActivGuard,MyserService,
   ],
  bootstrap: [AppComponent]
})

export class AppModule { }
