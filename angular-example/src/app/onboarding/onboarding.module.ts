import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import { AddressComponent } from '../address/address.component';
import { AccountComponent } from '../account/account.component';
import { InfoComponent } from '../info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes = [
  {path: 'address', component: AddressComponent},
  {path: 'account', component: AccountComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OnboardingComponent,
    AddressComponent,
    AccountComponent,
    InfoComponent,]
})
export class OnboardingModule {
}
