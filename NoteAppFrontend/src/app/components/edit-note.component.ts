import { Component } from '@angular/core';
import { NoteService } from '../src/app/api/services';
import { CreateNoteDto} from '../src/app/api/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent {
  public note: CreateNoteDto
  public idEditNote: number;

  public constructor(private noteService: NoteService, private router:Router){
    this.note = { title: '', text: ''};
    this.idEditNote = 0;
  }
   editNote(){
    this.noteService.apiNotesUpdateNoteIdPut({body: this.note, id: this.idEditNote}).subscribe(
        res =>{
             console.log("Se edito la nota");
            }, 
        error => {
            console.error("Error al editar nota:", error);
        }
    );
    this.router.navigate(['/']);
  }

  ngOnInit(){
     this.idEditNote = history.state.noteToEdit.id;
     this.note = history.state.noteToEdit;
     console.log("Nota recibida en el componente edit note" + this.note);
  }

  cancelar(){
    this.router.navigate(['/note']);
  }
}