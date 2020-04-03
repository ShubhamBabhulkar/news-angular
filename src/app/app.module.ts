import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SignupPopupComponent } from './components/signup-popup/signup-popup.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { AccordianViewComponent } from './components/accordian-view/accordian-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    SignupPopupComponent,
    NewsSectionComponent,
    AccordianViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignupPopupComponent]
})
export class AppModule { }
