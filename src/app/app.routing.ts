import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./common/home.component";
import { LoginComponent } from "./common/login.component";
import { RegisterComponent } from "./common/register.component";
import { AuthGuard } from "./common/auth.guard";
import { CfgComponent } from "./common/cfg.component";

import { TasksComponent } from "./task/tasks.component";

import { AccountComponent } from "./money/account.component";
import { MovementComponent } from "./money/movement.component";
import { BalanceComponent } from "./money/balance.component";
import { PlaceComponent } from "./money/place.component";
import { PresetComponent } from "./money/preset.component";

import { LastTimeComponent } from "./lasttime/lasttime.component";

import { MultimediaComponent } from "./multimedia/multimedia.component";

import { TypeGeneratorComponent } from "./internal/type-generator.component";

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: "tasks",
    component: TasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "movement",
    component: MovementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "balance",
    component: BalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "places",
    component: PlaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "presets",
    component: PresetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cfg",
    component: CfgComponent
  },
  {
    path: "lasttime",
    component: LastTimeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "multimedia",
    component: MultimediaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "type-generator",
    component: TypeGeneratorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "register", component: RegisterComponent },
  { path: "**", redirectTo: "" }
  // { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);