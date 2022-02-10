import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { routing } from "./app.routing";

import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./task/tasks.component";
import { TaskComponent } from "./task/task.component";
import { MenuComponent } from "./common/menu.component";
import { SyncComponent } from "./common/sync.component";

import { AccountComponent } from "./money/account.component";
import { MovementComponent } from "./money/movement.component";
import { BalanceComponent } from "./money/balance.component";
import { CategoryComponent } from "./money/category.component";
import { PlaceComponent } from "./money/place.component";
import { PresetComponent } from "./money/preset.component";
import { MovementListingComponent } from "./money/movementListing.component";

import { LastTimeComponent } from "./lasttime/lasttime.component";

import { MultimediaComponent } from "./multimedia/multimedia.component";

import { LinkComponent } from "./link/link.component";

import { ActivityComponent } from "./activities/activity.component";

import { StorageService } from "./common/storage.service";
import { EntryService } from "./money/entry.service";
import { DateCommon } from "./common/date.common";
import { ComboItemComponent } from "./common/comboItem.component";
import { CheckboxOptionComponent } from "./common/checkbox-option.component";
import { DrinkWaterComponent } from "./common/drinkwater.component";
import { SyncAPI } from "./common/sync.api";
import { UtilsCommon } from "./common/utils.common";
import { LoginComponent } from "./common/login.component";
import { CfgComponent } from "./common/cfg.component";
import { TypeGeneratorComponent } from "./internal/type-generator.component";
import { TimeFormatComponent } from "./task/time-format.component";
import { NotificationComponent } from "./common/notification.component";
import { TimelineComponent } from "./common/TimelineComponent";

import { PendingProvisionReportComponent } from "./cartera/PendingProvisionReportComponent";
import { UnitStatusReportComponent } from "./cartera/UnitStatusReportComponent";
import { ResultsReportComponent } from "./cartera/ResultsReportComponent";
import { MovementsReportComponent } from "./cartera/MovementsReportComponent";
import { CarteraComponent } from "./cartera/CarteraComponent";
import { PaymentReportComponent } from "./cartera/PaymentReport/PaymentReportComponent";
import { ReceiptReportComponent } from "./cartera/ReceiptReport/ReceiptReportComponent";

import { AlertComponent } from "./common/alert.component";
import { JwtInterceptor } from "./common/jwt.interceptor";
import { ErrorInterceptor } from "./common/error.interceptor";
import { HomeComponent } from "./common/home.component";
import { RegisterComponent } from "./common/register.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    ChartsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    AccountComponent,
    MovementComponent,
    BalanceComponent,
    CategoryComponent,
    PlaceComponent,
    PresetComponent,
    MovementListingComponent,
    ComboItemComponent,
    CheckboxOptionComponent,
    DrinkWaterComponent,
    TimeFormatComponent,
    NotificationComponent,
    TimelineComponent,
    MenuComponent,
    SyncComponent,
    LoginComponent,
    CfgComponent,
    LastTimeComponent,
    MultimediaComponent,
    LinkComponent,
    ActivityComponent,
    PendingProvisionReportComponent,
    UnitStatusReportComponent,
    ResultsReportComponent,
    MovementsReportComponent,
    CarteraComponent,
    PaymentReportComponent,
    ReceiptReportComponent,
    TypeGeneratorComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent
  ], // parent & child components
  bootstrap: [AppComponent], // only parent components
  providers: [
    DateCommon,
    StorageService,
    EntryService,
    SyncAPI,
    UtilsCommon,
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppModule {}
