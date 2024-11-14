import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ListingComponent} from "./pages/listing/listing.component";
import {AgentComponent} from "./pages/agent/agent.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {PropertyDetailComponent} from "./components/property-detail/property-detail.component";
import {AgentProfileComponent} from "./components/agent-profile/agent-profile.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingComponent},
  {path: 'agent/:id', component: AgentComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'property/:id', component: PropertyDetailComponent},
  {path: 'agents', component: AgentProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
