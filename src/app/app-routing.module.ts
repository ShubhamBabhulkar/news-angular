import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsSectionComponent } from './components/news-section/news-section.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: NewsSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
