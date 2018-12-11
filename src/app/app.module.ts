
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';

import {
  MatSnackBar,
  MatSortModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule

} from '@angular/material';


import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    MatCardModule,
    MatSortModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
