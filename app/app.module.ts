import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms'
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent }           from './app.component';
import { MessageComponent }       from './message.component';
import { PageNotFoundComponent }  from './not-found.component';

const appRoutes: Routes = [
  { path: 'message', component: MessageComponent },
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  /*{ path: 'participants', component: MessageComponent }, */
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MessageComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
