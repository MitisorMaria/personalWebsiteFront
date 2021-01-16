import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProcessComponent } from './process/process.component';
import { CvComponent } from './cv/cv.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "cv", component: CvComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "process", component: ProcessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
