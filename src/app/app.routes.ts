import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { isConnectedGuard } from './core/is-connected.guard';
import { IsAdminGuard } from './core/is-admin.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [isConnectedGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard] }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule],
// })
// export class AppRoutingModule {}