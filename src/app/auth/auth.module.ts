import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule,
    ],
})
export class AuthModule {}
