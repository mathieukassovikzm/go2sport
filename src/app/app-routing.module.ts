import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesNames } from './models/routes';

const routes: Routes = [
  { path: '', redirectTo: RoutesNames.PageHome, pathMatch: 'full' },
  {
    path: RoutesNames.PageHome,
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
    data: { animationState: 'home' }
  },
  {
    path: RoutesNames.PageSportEnEntreprise,
    loadChildren: () =>
      import('./pages/page-see/page-see.module').then((m) => m.PageSeeModule),
    data: { animationState: 'see' }
  },
  {
    path: RoutesNames.PageSportPourParticulier,
    loadChildren: () =>
      import('./pages/page-spp/page-spp.module').then((m) => m.PageSppModule),
    data: { animationState: 'spp' }
  },
  {
    path: RoutesNames.PageSportEnEcoles,
    loadChildren: () =>
      import('./pages/page-seec/page-seec.module').then(
        (m) => m.PageSeecModule
      ),
    data: { animationState: 'seec' }
  },
  {
    path: RoutesNames.PageContact,
    loadChildren: () =>
      import('./pages/page-contact/page-contact.module').then(
        (m) => m.PageContactModule
      ),
    data: { animationState: 'contact' }
  },
  {
    path: RoutesNames.PageMentionsLegales,
    loadChildren: () =>
      import('./pages/page-ml/page-ml.module').then((m) => m.PageMlModule),
  },
  {
    path: RoutesNames.PagePolitiqueConfidentialite,
    loadChildren: () =>
      import('./pages/page-pc/page-pc.module').then((m) => m.PagePcModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
