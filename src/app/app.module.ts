import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { AccouthistoryComponent } from './accouthistory/accouthistory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CreditcardComponent,
    AccouthistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
