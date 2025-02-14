import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { RegistryComponent } from './registry/registry.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'our-story', component: OurStoryComponent },
    { path: 'wedding-details', component: WeddingDetailsComponent },
    { path: 'registry', component: RegistryComponent },
    { path: 'subscribe', component: SubscribeComponent },
    { path: '**', redirectTo: '' } // Redirect unknown routes to home
  ];