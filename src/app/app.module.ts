import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from 'src/store/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot<{}>({ users: usersReducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Practice App',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
