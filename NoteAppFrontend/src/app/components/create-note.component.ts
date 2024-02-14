import { Component } from '@angular/core';
import { NoteService } from '../src/app/api/services';
import { NoteDto } from '../src/app/api/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  public note: NoteDto;

  public constructor(private noteService: NoteService, private router: Router){
    this.note = { title: '', text: ''};

  }
   createNote(){
    this.noteService.apiNotesCreateNotePost({body: this.note}).subscribe(
        res =>{
             console.log("Se creo la nota");
            }, 
        error => {
            console.error("Error al crear nota: ", error);
        }
    );
    this.router.navigate(['/']);
  }

  cancelar(){
    this.router.navigate(['/note']);
  }
}