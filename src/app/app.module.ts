import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { DisplayComponent } from './display/display.component';
import {SharedService} from './shared.service';
import { Routes , RouterModule} from '@angular/router';
const navRoutes: Routes = [
		{path: 'entry' , component: EntryComponent},
		{path: 'display' , component: DisplayComponent}
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(navRoutes),
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
