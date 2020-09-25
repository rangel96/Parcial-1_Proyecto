import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { ColorsComponent } from './components/content/colors/colors.component';
import { IllustrationsComponent } from './components/content/illustrations/illustrations.component';
import { ApproachComponent } from './components/content/approach/approach.component';
import { HomeComponent } from './interfaces/home/home.component';
import { NopagefoundComponent } from './interfaces/pages/nopagefound/nopagefound.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ScrooltopComponent } from './components/shared/scrooltop/scrooltop.component';
import { LogoutmodalComponent } from './components/shared/logoutmodal/logoutmodal.component';
import { AreachartComponent } from './components/content/areachart/areachart.component';
import { PiechartComponent } from './components/content/piechart/piechart.component';
import { ButtonsComponent } from './interfaces/components/buttons/buttons.component';
import { BordersComponent } from './interfaces/utilities/borders/borders.component';
import { AnimationsComponent } from './interfaces/utilities/animations/animations.component';
import { OtherComponent } from './interfaces/utilities/other/other.component';
import { LoginComponent } from './interfaces/pages/login/login.component';
import { RegisterComponent } from './interfaces/pages/register/register.component';
import { ForgotpasswordComponent } from './interfaces/pages/forgotpassword/forgotpassword.component';
import { BlankpageComponent } from './interfaces/pages/blankpage/blankpage.component';
import { ChartsComponent } from './interfaces/charts/charts.component';
import { TablesComponent } from './interfaces/tables/tables.component';
import { AllcardsComponent } from './components/content/cards/allcards/allcards.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ProjectsComponent,
    ColorsComponent,
    IllustrationsComponent,
    ApproachComponent,
    HomeComponent,
    NopagefoundComponent,
    FooterComponent,
    ScrooltopComponent,
    LogoutmodalComponent,
    AreachartComponent,
    PiechartComponent,
    ButtonsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    BlankpageComponent,
    ChartsComponent,
    TablesComponent,
    AllcardsComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
