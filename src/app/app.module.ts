import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/content-area/about/about.component';
import { SkillsComponent } from './components/content-area/skills/skills.component';
import { PortfolioComponent } from './components/content-area/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/content-area/work-experience/work-experience.component';
import { EducationComponent } from './components/content-area/education/education.component';
import { ReferencesComponent } from './components/content-area/references/references.component';
import { ContactComponent } from './components/content-area/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'work-experience', component: WorkExperienceComponent},
  {path: 'education', component: EducationComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/about'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentAreaComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    WorkExperienceComponent,
    EducationComponent,
    ReferencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
