import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './interfaces/home/home.component';
import {ButtonsComponent} from './interfaces/components/buttons/buttons.component';
import {CardsComponent} from './interfaces/components/cards/cards.component';
import {BordersComponent} from './interfaces/utilities/borders/borders.component';
import {ColorsComponent} from './interfaces/utilities/colors/colors.component';
import {AnimationsComponent} from './interfaces/utilities/animations/animations.component';
import {OtherComponent} from './interfaces/utilities/other/other.component';
import {LoginComponent} from './interfaces/pages/login/login.component';
import {RegisterComponent} from './interfaces/pages/register/register.component';
import {ForgotpasswordComponent} from './interfaces/pages/forgotpassword/forgotpassword.component';
import {NopagefoundComponent} from './interfaces/pages/nopagefound/nopagefound.component';
import {BlankpageComponent} from './interfaces/pages/blankpage/blankpage.component';
import {ChartsComponent} from './interfaces/charts/charts.component';
import {TablesComponent} from './interfaces/tables/tables.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'components/buttons', component: ButtonsComponent },
  { path: 'components/cards', component: CardsComponent },
  { path: 'utilities/colors', component: ColorsComponent },
  { path: 'utilities/borders', component: BordersComponent },
  { path: 'utilities/animations', component: AnimationsComponent },
  { path: 'utilities/other', component: OtherComponent },
  { path: 'pages/login', component: LoginComponent },
  { path: 'pages/register', component: RegisterComponent },
  { path: 'pages/forgotpassword', component: ForgotpasswordComponent },
  { path: 'pages/nopagefound', component: NopagefoundComponent },
  { path: 'pages/blankpage', component: BlankpageComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'tables', component: TablesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Cuando no encuentra algo se redirecciona al Home
  { path: '**', pathMatch: 'full', redirectTo: 'pages/nopagefound' } // Cuando no encuentra algo se redirecciona al Home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
