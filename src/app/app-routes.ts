import { Routes } from '@angular/router';
import { RoutesNames } from './models/routes';

export const routes: Routes = [
  { path: '', redirectTo: RoutesNames.PageHome, pathMatch: 'full' },
  {
    path: RoutesNames.PageHome,
    loadComponent: () =>
      import('./pages/page-home/page-home.component').then(
        (m) => m.PageHomeComponent
      ),
    data: { animationState: 'home' }
  },
  {
    path: RoutesNames.PageSportEnEntreprise,
    loadComponent: () =>
      import('./pages/page-see/page-see.component').then((m) => m.PageSeeComponent),
    data: { animationState: 'see' }
  },
  {
    path: RoutesNames.PageSportPourParticulier,
    loadComponent: () =>
      import('./pages/page-spp/page-spp.component').then((m) => m.PageSppComponent),
    data: { animationState: 'spp' }
  },
  {
    path: RoutesNames.PageSportEnEcoles,
    loadComponent: () =>
      import('./pages/page-seec/page-seec.component').then(
        (m) => m.PageSeecComponent
      ),
    data: { animationState: 'seec' }
  },
  {
    path: RoutesNames.PageContact,
    loadComponent: () =>
      import('./pages/page-contact/page-contact.component').then(
        (m) => m.PageContactComponent
      ),
    data: { animationState: 'contact' }
  },
  {
    path: RoutesNames.PageMentionsLegales,
    loadComponent: () =>
      import('./pages/page-ml/page-ml.component').then((m) => m.PageMlComponent),
  },
  {
    path: RoutesNames.PagePolitiqueConfidentialite,
    loadComponent: () =>
      import('./pages/page-pc/page-pc.component').then((m) => m.PagePcComponent),
  },
];
