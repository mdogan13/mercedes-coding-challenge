import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockTableComponent } from './pages/entry-page/components/stock-table/stock-table.component';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { RouterModule, Routes } from '@angular/router';

const COMPONENTS = [EntryPageComponent, EditPageComponent, StockTableComponent];

const routes: Routes = [
  { path: '', redirectTo: 'entry-page', pathMatch: 'full' },
  { path: 'entry-page', component: EntryPageComponent },
  { path: 'edit-page', component: EditPageComponent },
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
