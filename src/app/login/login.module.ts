import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'angular2-spinner';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [ FormsModule  ,CommonModule, LoginRoutingModule,Ng4LoadingSpinnerModule.forRoot()],
    declarations: [LoginComponent]
})
export class LoginModule {}
