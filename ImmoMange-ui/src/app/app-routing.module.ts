import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./features/authentication/login/login.component";
import {RegisterComponent} from "./features/authentication/register/register.component";
import {BodyComponent} from "./body/body.component";
import {HomeComponent} from "./features/home/home.component";
import {ProfileComponent} from "./features/profile/profile.component";
import {TenantComponent} from "./features/tenant/tenant.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {PropertyComponent} from "./features/property/property.component";
import {NewPropertyComponent} from "./features/new-property/new-property.component";
import {AddPropertyMessageComponent} from "./features/add-property-message/add-propertie-message.component";
import {UserComponent} from "./appUser/user.component";
import {authGuard} from "./services/guards/authentication.guard";

const routes: Routes = [
  { path: "", redirectTo: "/user/login", pathMatch: "full" },
  { path: "user/login", component: LoginComponent },
  { path: "user/register", component: RegisterComponent },
    { path: "AppUser", component: UserComponent, canActivate: [authGuard],
    children: [
      { path: "body", component: BodyComponent },
      { path: "home", component: HomeComponent, canActivate: [authGuard] },
      { path: "profile", component: ProfileComponent, canActivate: [authGuard] },
      { path: "tenant", component: TenantComponent, canActivate: [authGuard] },
      { path: "property", component: PropertyComponent, canActivate: [authGuard] },
      { path: "dashboard", component: DashboardComponent, canActivate: [authGuard] },
      { path: "property/newProperty", component: NewPropertyComponent, canActivate: [authGuard] },
      { path: "property/addPropertyMessage", component: AddPropertyMessageComponent, canActivate: [authGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
