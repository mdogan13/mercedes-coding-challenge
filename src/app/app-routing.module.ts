import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'entry-page', pathMatch: 'full' },
  { path: 'entry-page', component: EntryPageComponent },
  { path: 'edit-page', component: EditPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
