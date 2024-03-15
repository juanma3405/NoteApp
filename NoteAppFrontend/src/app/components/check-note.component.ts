import { Component} from '@angular/core';
import { NoteService } from '../src/app/api/services';
import { CategoryDto, NoteDto, NoteDtoConCategories } from '../src/app/api/models';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { CategoryPopupComponent } from './category-popup.component';


@Component({
  selector: 'app-check-note',
  templateUrl: './check-note.component.html',
  styleUrls: ['./check-note.component.css']
})
export class CheckNoteComponent {
  public note: NoteDto;
  public noteConCategories: NoteDtoConCategories;
  public categorias: CategoryDto[];


  public constructor(private noteService: NoteService, private router: Router, private dialog: MatDialog){
    this.note = { title: '', text: ''};
    this.categorias = [];
    this.noteConCategories = {};
  }
   
  editarNota(note: NoteDto){
    this.router.navigate(['/editNote'],{
        state: {noteToEdit: note}
    })
  }

  eliminarNota(id?: number){
    console.log("Entro a eliminar la nota con el id: ", id);
    this.router.navigate(['/eliminateNote'],{
        state: {idNota: id}
    })
  }

  desarchivarNota(note: NoteDto){
    if (note.id !== undefined){
        this.noteService.apiNotesUnarchiveNoteIdPut({id: note.id}).subscribe({
            next: () => note.active = !note.active,
            error: (e) => console.error('Error al desarchivar nota: '+ e),
            complete:() => console.info('Se desarchivo la nota')
        }
        );
    }
    this.router.navigate(['/note']);
  }
  
  archivarNota(note: NoteDto){
    if (note.id !== undefined) {
        this.noteService.apiNotesArchiveNoteIdPut({id: note.id}).subscribe(
        {
            next: () => note.active = !note.active,
            error: (e) => console.error('Error al archivar la nota: '+e),
            complete:() => console.info('Se archivo la nota')
        });
    }
     this.router.navigate(['/note']);
  }

  abrirPopupCategorias(){
    var categoriaPopUp = {
      id: 0,
      name: "",
      selected: false
    };
    var listaCategoriasPopUp: {id: number; name: string; selected: boolean; }[] = [];
    this.categorias.forEach( categoria => {
      var nuevaCategoriaPopUp = {...categoriaPopUp};
      if(categoria.name != null && categoria.name != undefined){
        nuevaCategoriaPopUp.name = categoria.name;
      }
      if (categoria.id != null && categoria.id != undefined){
        nuevaCategoriaPopUp.id = categoria.id;
      }
      nuevaCategoriaPopUp.selected = false;
      listaCategoriasPopUp.push(nuevaCategoriaPopUp);
    })
    var mapaCategoriasEnNote : { [key: string]: boolean } = {};
    this.noteConCategories.categories?.forEach(category => {
      if (category.name != null){
        mapaCategoriasEnNote[category.name] = true;
      }
    });
    listaCategoriasPopUp.forEach(categoria => {
      if (mapaCategoriasEnNote[categoria.name]){
        categoria.selected = true;
      }
    });
    const dialogRef = this.dialog.open(CategoryPopupComponent, {
      width: '300px',
      data: { categorias: listaCategoriasPopUp, note: this.note }
  });
    dialogRef.componentInstance.guardarCategoriasEvent.subscribe((etiquetasSeleccionadas: any[]) => {
    
    });
  }

  ngOnInit(){
     this.note = history.state.noteToCheck;
     this.noteConCategories = history.state.noteToCheck;
     this.categorias = history.state.categories;
  }

  volverANotes(){
    this.router.navigate(['/note']);
  }

}