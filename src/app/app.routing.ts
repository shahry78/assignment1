import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';
import { Role } from './models';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.SuperAdmin] }
    },
    {
        path: 'group',
        component: GroupComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.SuperAdmin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'normalUser',
        component: NormalUserComponent
    },
    {
        path: 'chat',
        component: ChatComponent,
        canActivate: [AuthGuard]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);