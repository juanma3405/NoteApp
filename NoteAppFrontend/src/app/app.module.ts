import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { CreateNoteComponent } from './components/create-note.component';
import { EditNoteComponent } from './components/edit-note.component';
import { EliminateNoteComponent } from './components/eliminate-note.component';
import { CheckNoteComponent } from './components/check-note.component';
import { CategoryComponent } from './components/category.component';
import { CreateCategoryComponent } from './components/create-category.componet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryPopupComponent } from './components/category-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    CreateNoteComponent,
    EditNoteComponent,
    EliminateNoteComponent,
    CheckNoteComponent,
    CategoryComponent,
    CreateCategoryComponent,
    CategoryPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
