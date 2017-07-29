import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdComponent } from './ad/ad.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccountService } from './account/account.service';
import { SharedService } from './shared.service';

const routes = [
  {path: '', component: AdComponent},
  {path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AccountService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
