import { Component } from '@angular/core';
import { NoteService, CategoryService } from '../src/app/api/services';
import { NoteDtoConCategories, CategoryDto } from '../src/app/api/models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  public notes: NoteDtoConCategories[];
  public filtroSeleccionado: string ='notas';
  public categoriaSeleccionada: CategoryDto = {id:0 , name:'Todas las categorias'};
  public subscription: Subscription = new Subscription();
  public categories: CategoryDto[];

  public constructor(private noteService: NoteService, private categoryService: CategoryService, private router: Router){
    this.notes = [];
    this.categories = [];
    this.cargarNotas();
  }

  crearNota(){
    console.log("Entro a crear nota");
    this.router.navigate(['/createNote'])
  }

  verNota(note: NoteDtoConCategories){
    console.log("Entro a chequear la nota con el id: ", note.id);
    this.router.navigate(['/checkNote'],{
        state: {noteToCheck: note, categories: this.categories}
    })
  }

   ngOnInit(): void {
    this.subscription = this.noteService.refresh$.subscribe(() => {
      this.cargarNotas();
    });
    this.cargarCategorias();
   }

   cargarNotas() {
    this.noteService.apiNotesGetNotesWithCategoriesGet$Json().subscribe({
         next: (response: any) => this.notes = response.value,
         error: (e) => console.error("La respuesta no contiene un value que sea un array de notas" + e),
         complete:() => console.info('Respuesta de notas exitosa')
    })
   }

   cargarCategorias(){
    this.categoryService.apiCategoriesGetCategoriesGet$Json().subscribe({
            next: (response: any) => this.categories = response.value,
            error: (e) => console.error(e),
            complete:() => console.info('complete')
        })
   }

    filtrarNotas(){
    if(this.filtroSeleccionado == 'activas'){
        this.noteService.apiNotesGetActiveNotesGet$Json().subscribe({
         next: (response: any) => this.notes = response.value,
         error: (e) => console.error("La respuesta no contiene un value que sea un array de notas" + e),
         complete:() => console.info('Respuesta de notas activas exitosa')
    }  
    );
    }
    if(this.filtroSeleccionado == 'archivadas'){
        this.noteService.apiNotesGetArchivedNotesGet$Json().subscribe({
         next: (response: any) => this.notes = response.value,
         error: (e) => console.error("La respuesta no contiene un value que sea un array de notas" + e),
         complete:() => console.info('Respuesta de notas archivadas exitosa')
    }  
    );
    }
    if (this.filtroSeleccionado == 'notas'){
        this.cargarNotas();
    }
    }

    filtrarNotasPorCategoria(){
        debugger;
        if (this.categoriaSeleccionada.name === 'Todas las categorias'){
            this.cargarNotas();
        }
        if (this.categoriaSeleccionada.name !== null && this.categoriaSeleccionada.name !== undefined){
            this.noteService.apiNotesGetNotesByCategoryNameGet$Json({name: this.categoriaSeleccionada.name}).subscribe({
         next: (response: any) => this.notes = response.value,
         error: (e) => console.error("La respuesta no contiene un value que sea un array de notas" + e),
         complete:() => console.info('Respuesta de notas segun categoria exitosa')
    }  
        ); 
        }
    }

    verCategorias(){
        this.router.navigate(['/category']);
    }
}
