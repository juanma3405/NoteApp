import { Component } from '@angular/core';
import { NoteService } from '../src/app/api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminate-note',
  templateUrl: './eliminate-note.component.html',
  styleUrls: ['./eliminate-note.component.css']
})
export class EliminateNoteComponent {
  public idEliminateNote: number;

  public constructor(private noteService: NoteService, private router: Router){
    this.idEliminateNote = 0;
  }

  ngOnInit(){
     this.idEliminateNote = history.state.idNota;
     console.log("Id recibido en componente a eliminar", this.idEliminateNote);
  }

  cancelDelete(){
    this.router.navigate(['/note'])
  }

  confirmDelete(){
    this.noteService.apiNotesDeleteNoteIdDelete({id: this.idEliminateNote}).subscribe({
            error: (e) => console.error('Error al eliminar la nota: '+e),
            complete:() => console.info('Se elimino la nota')
        });
     this.router.navigate(['/']);
  }
}