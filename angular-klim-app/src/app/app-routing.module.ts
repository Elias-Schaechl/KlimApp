import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityGoalComponent } from './components/community-goal/community-goal.component';
import { CreateRouteComponent } from './components/create-route/create-route.component';
import { GoalComponent } from './components/goal/goal.component';
import { HelpComponent } from './components/help/help.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'create-route', component: CreateRouteComponent},
  { path: 'goals', component: GoalComponent},
  { path: 'community-goals', component: CommunityGoalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'help', component: HelpComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
