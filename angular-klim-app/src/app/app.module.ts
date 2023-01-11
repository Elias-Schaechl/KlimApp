import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GoalComponent } from './components/goal/goal.component';
import { CommunityGoalComponent } from './components/community-goal/community-goal.component';
import { HelpComponent } from './components/help/help.component';
import { CreateRouteComponent } from './components/create-route/create-route.component';
import { LoginComponent } from './components/login/login.component';
import { RoutesComponent } from './components/routes/routes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GoalComponent,
    CommunityGoalComponent,
    HelpComponent,
    CreateRouteComponent,
    LoginComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
