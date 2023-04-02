import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { APP_ROUTES } from './constants/routes';

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.ENTRY_PAGE, pathMatch: 'full' },
  { path: APP_ROUTES.ENTRY_PAGE, component: EntryPageComponent },
  { path: APP_ROUTES.EDIT_PAGE, component: EditPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
