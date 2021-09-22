import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';;
import { GroupComponent } from './group/group.component';
import { HttpModule } from '@angular/http';
import { HeroService } from './services/hero.service';
import { UserComponent } from './user/user.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/memory-data.service';;
import { NormalUserComponent } from './normal-user/normal-user.component'
;
import { ChatComponent } from './chat/chat.component'

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        HttpModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
          )

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent
,
        GroupComponent ,
        UserComponent ,
        NormalUserComponent ,
        ChatComponent ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }