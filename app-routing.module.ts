import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./animation/animation.module').then(m => m.AnimationPageModule)
  },
  {
    path: 'animation',
    loadChildren: () => import('./animation/animation.module').then(m => m.AnimationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./signup/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'developer',
    loadChildren: () => import('./developer/developer.module').then( m => m.DeveloperPageModule)
  },
  {
    path: 'swecha-fest',
    loadChildren: () => import('./swecha-fest/swecha-fest.module').then( m => m.SwechaFestPageModule)
  },
  {
    path: 'sigma',
    loadChildren: () => import('./sigma/sigma.module').then( m => m.SigmaPageModule)
  },
  {
    path: 'half-days',
    loadChildren: () => import('./half-days/half-days.module').then( m => m.HalfDaysPageModule)
  },
  {
    path: 'appreciations',
    loadChildren: () => import('./appreciations/appreciations.module').then( m => m.AppreciationsPageModule)
  },
  {
    path: 'registration-form',
    loadChildren: () => import('./registration-form/registration-form.module').then( m => m.RegistrationFormPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
