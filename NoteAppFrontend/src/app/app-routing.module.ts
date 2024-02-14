import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './components/note.component';
import { CreateNoteComponent } from './components/create-note.component';
import { EditNoteComponent } from './components/edit-note.component';
import { EliminateNoteComponent } from './components/eliminate-note.component';
import { CheckNoteComponent } from './components/check-note.component';
import { CategoryComponent } from './components/category.component';
import { CreateCategoryComponent } from './components/create-category.componet';

const routes: Routes = [
  {path:'', component: NoteComponent},
  {path:'note', component: NoteComponent},
  {path:'createNote', component: CreateNoteComponent},
  {path:'editNote', component: EditNoteComponent},
  {path:'eliminateNote', component: EliminateNoteComponent},
  {path: 'checkNote', component: CheckNoteComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'createCategory', component: CreateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
