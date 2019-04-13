import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./common/home.component";
import { LoginComponent } from "./common/login.component";
import { RegisterComponent } from "./common/register.component";
import { AuthGuard } from "./common/auth.guard";

import { TasksComponent } from "./task/tasks.component";

import { AccountComponent } from "./money/account.component";
import { MovementComponent } from "./money/movement.component";
import { BalanceComponent } from "./money/balance.component";
import { RebuildComponent } from "./money/rebuild.component";

import { LastTimeComponent } from "./lasttime/lasttime.component";

import { MultimediaComponent } from "./multimedia/multimedia.component";

import { TypeGeneratorComponent } from "./internal/type-generator.component";

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: "tasks",
    component: TasksComponent,
    data: { title: "Tasks" },
    canActivate: [AuthGuard]
  },
  {
    path: "account",
    component: AccountComponent,
    data: { title: "Accounts" }
  },
  {
    path: "movement",
    component: MovementComponent,
    data: { title: "Movements" }
  },
  {
    path: "balance",
    component: BalanceComponent,
    data: { title: "Balance" }
  },
  {
    path: "rebuild",
    component: RebuildComponent,
    data: { title: "Rebuild" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login" }
  },
  {
    path: "lasttime",
    component: LastTimeComponent,
    data: { title: "Last Time" },
    canActivate: [AuthGuard]
  },
  {
    path: "multimedia",
    component: MultimediaComponent,
    data: { title: "Multimedia" },
    canActivate: [AuthGuard]
  },
  {
    path: "type-generator",
    component: TypeGeneratorComponent,
    data: { title: "Type Generator" }
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
