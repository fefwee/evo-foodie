import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthUserService } from './services/auth-user.service';
import { RecipeService } from './services/recipe.service';
import { UserState } from './store/user.state';
import { FavoriteState } from './store/favorite.state';
import { roleAccessGuard } from './guards/role-access.guard';
import { childRoleAccessGuard } from './guards/child-role-access.guard';
import { roleUserAccessGuard } from './guards/role-user-access.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxsModule.forRoot([UserState, FavoriteState]),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [AuthUserService, RecipeService, {
    provide: 'roleAccessGuard',
    useValue: roleAccessGuard
  },
    {
      provide: 'childRoleAccessGuard',
      useValue: childRoleAccessGuard
    },
    {
      provide: 'roleUserAccessGuard',
      useValue: roleUserAccessGuard
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
