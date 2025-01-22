import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IdolosComponent } from './pages/idolos/idolos.component';
import { MandamentosComponent } from './pages/mandamentos/mandamentos.component';
import { ContentComponent } from './pages/content/content.component'

const routes: Routes = [
  { path:'' , component: HomeComponent },
  { path: 'idolos', component: IdolosComponent },
  { path: 'mandamentos', component: MandamentosComponent },
  { path: 'content/:id', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
