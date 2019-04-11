import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SalariesComponent } from './salaries/salaries/salaries.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalarySearchComponent } from './salary-search/salary-search.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalariesComponent,
    NavbarComponent,
    SalarySearchComponent,
    SalaryDetailComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
