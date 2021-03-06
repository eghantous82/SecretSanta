import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { RouterModule, Routes, PreloadAllModules }   from '@angular/router';
import { HttpModule }             from '@angular/http';
import { AppComponent }           from './app.component';
import { MessageComponent }       from './message.component';
import { ParticipantsComponent }  from './participants.component';
import { PageNotFoundComponent }  from './not-found.component';
import { MessageService }         from './message.service';
import { ParticipantsService }    from './participants.service';
import { ExListDialogComponent }  from './exlist-dialog.component';

const appRoutes: Routes = [
  { path: 'message', component: MessageComponent },
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  { path: 'participants', component: ParticipantsComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    AppComponent,
    MessageComponent,
    PageNotFoundComponent,
    ParticipantsComponent,
    ExListDialogComponent
  ],
  providers: [
    ParticipantsService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
