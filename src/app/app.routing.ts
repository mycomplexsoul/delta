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
import { CategoryComponent } from "./money/category.component";
import { PlaceComponent } from "./money/place.component";
import { PresetComponent } from "./money/preset.component";
import { BudgetListComponent } from "./money/budget-list.component";

import { LastTimeComponent } from "./lasttime/lasttime.component";

import { MultimediaComponent } from "./multimedia/multimedia.component";

import { LinkComponent } from "./link/link.component";

import { ActivityComponent } from "./activities/activity.component";

import { PendingProvisionReportComponent } from "./cartera/PendingProvisionReportComponent";
import { UnitStatusReportComponent } from "./cartera/UnitStatusReportComponent";
import { ResultsReportComponent } from "./cartera/ResultsReportComponent";
import { MovementsReportComponent } from "./cartera/MovementsReportComponent";
import { CarteraComponent } from "./cartera/CarteraComponent";
import { PaymentReportComponent } from "./cartera/PaymentReport/PaymentReportComponent";
import { ReceiptReportComponent } from "./cartera/ReceiptReport/ReceiptReportComponent";

import { TypeGeneratorComponent } from "./internal/type-generator.component";
import { CarouselComponent } from "./carousel.component";
import { PlanSalvacionComponent } from "./plan-salvacion/plan-salvacion.component";
import { LibrosComponent } from "./libros.component";
import { CvComponent } from "./cv/cv.component";

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: "tasks",
    component: TasksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "movement",
    component: MovementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "balance",
    component: BalanceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "categories",
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "places",
    component: PlaceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "presets",
    component: PresetComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "cfg",
    component: CfgComponent,
  },
  {
    path: "lasttime",
    component: LastTimeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "multimedia",
    component: MultimediaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "links",
    component: LinkComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "activities",
    component: ActivityComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "cartera-pending-payments",
    component: PendingProvisionReportComponent,
  },
  {
    path: "cartera-unit-status",
    component: UnitStatusReportComponent,
  },
  {
    path: "cartera-results",
    component: ResultsReportComponent,
  },
  {
    path: "cartera-movements",
    component: MovementsReportComponent,
  },
  {
    path: "cartera",
    component: CarteraComponent,
  },
  {
    path: "cartera-payment-report",
    component: PaymentReportComponent,
  },
  {
    path: "receipt-report",
    component: ReceiptReportComponent,
  },
  {
    path: "type-generator",
    component: TypeGeneratorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "carousel",
    component: CarouselComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "plan-salvacion",
    component: PlanSalvacionComponent,
  },
  {
    path: "libros",
    component: LibrosComponent,
  },
  {
    path: "cv",
    component: CvComponent,
  },
  {
    path: "budget",
    component: BudgetListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: "register", component: RegisterComponent },
  { path: "**", redirectTo: "" },
  // { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
