import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { AccouthistoryComponent } from './accouthistory/accouthistory.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CreditcardComponent,
    AccouthistoryComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
     ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'cards', component: CreditcardComponent },
      { path: 'history', component: AccouthistoryComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: WelcomeComponent, pathMatch: 'full'}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
