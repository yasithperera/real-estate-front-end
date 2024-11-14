import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListingComponent } from './pages/listing/listing.component';
import { AgentComponent } from './pages/agent/agent.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    AgentProfileComponent,
    ContactFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListingComponent,
    AgentComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatButton
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
