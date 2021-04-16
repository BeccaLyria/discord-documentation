import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoCommandComponent } from './auto-command/auto-command.component';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { BotDeployComponent } from './bot-deploy/bot-deploy.component';
import { BotSetupComponent } from './bot-setup/bot-setup.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DepCommandComponent } from './dep-command/dep-command.component';
import { LevelscaleComponent } from './levelscale/levelscale.component';
import { LocalInstanceComponent } from './local-instance/local-instance.component';
import { ManCommandComponent } from './man-command/man-command.component';
import { NewCommandComponent } from './new-command/new-command.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TroubleComponent } from './trouble/trouble.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'local', component: LocalInstanceComponent },
  { path: 'setup', component: BotSetupComponent },
  { path: 'deploy', component: BotDeployComponent },
  { path: 'config', component: BotConfigComponent },
  { path: 'auto-cmd', component: AutoCommandComponent },
  { path: 'manual-cmd', component: ManCommandComponent },
  { path: 'dep-cmd', component: DepCommandComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'new-cmd', component: NewCommandComponent },
  { path: 'trouble', component: TroubleComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'level-scale', component: LevelscaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
