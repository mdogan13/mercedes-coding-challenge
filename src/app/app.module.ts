import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockTableComponent } from './pages/entry-page/components/stock-table/stock-table.component';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { StockEditFormComponent } from './pages/edit-page/components/stock-edit-form/stock-edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

const COMPONENTS = [
  EntryPageComponent,
  EditPageComponent,
  StockTableComponent,
  StockEditFormComponent,
];

const ANGULAR_MATERIAL_MODULE = [
  MatTableModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...ANGULAR_MATERIAL_MODULE,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
