import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPlistAdminRoutedComponent } from './component/application/player/routed/player-plist-admin-routed/player-plist-admin-routed.component';
import { PlayerViewAdminRoutedComponent } from './component/application/player/routed/player-view-admin-routed/player-view-admin-routed.component';
import { PlayerRemoveAdminRoutedComponent } from './component/application/player/routed/player-remove-admin-routed/player-remove-admin-routed.component';
import { PlayerEditAdminRoutedComponent } from './component/application/player/routed/player-edit-admin-routed/player-edit-admin-routed.component';
import { PlayerNewAdminRoutedComponent } from './component/application/player/routed/player-new-admin-routed/player-new-admin-routed.component';
import { UsertypePlistAdminRoutedComponent } from './component/application/usertype/routed/usertype-plist-admin-routed/usertype-plist-admin-routed.component';
import { UsertypeViewAdminRoutedComponent } from './component/application/usertype/routed/usertype-view-admin-routed/usertype-view-admin-routed.component';
import { UsertypeRemoveAdminRoutedComponent } from './component/application/usertype/routed/usertype-remove-admin-routed/usertype-remove-admin-routed.component';
import { UsertypeEditAdminRoutedComponent } from './component/application/usertype/routed/usertype-edit-admin-routed/usertype-edit-admin-routed.component';
import { UsertypeNewAdminRoutedComponent } from './component/application/usertype/routed/usertype-new-admin-routed/usertype-new-admin-routed.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'admin/player/plist', component: PlayerPlistAdminRoutedComponent},
  { path: 'admin/player/view/:id', component: PlayerViewAdminRoutedComponent},
  { path: 'admin/player/remove/:id', component: PlayerRemoveAdminRoutedComponent},
  { path: 'admin/player/edit/:id', component: PlayerEditAdminRoutedComponent},
  { path: 'admin/player/new', component: PlayerNewAdminRoutedComponent},
  { path: 'admin/usertype/plist', component: UsertypePlistAdminRoutedComponent},
  { path: 'admin/usertype/view/:id', component:UsertypeViewAdminRoutedComponent},
  { path: 'admin/usertype/remove/:id', component:UsertypeRemoveAdminRoutedComponent},
  { path: 'admin/usertype/edit/:id', component:UsertypeEditAdminRoutedComponent},
  { path: 'admin/usertype/new', component: UsertypeNewAdminRoutedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
