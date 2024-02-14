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
    this.noteService.apiNotesGetNotesWithCategoriesGet$Json().subscribe(
        (res:any) =>{
            if (res && Array.isArray(res.value)){
                this.notes = res.value;
                console.log(res);
            } else{
                console.error("La respuesta no contiene un value que sea un array de notas", res);
            }
        },
        error => {
            console.error("Error al obtener notas", error);
        }
    );
   }

   cargarCategorias(){
    this.categoryService.apiCategoriesGetCategoriesGet$Json().subscribe(
        (res:any) =>{
            if (res && Array.isArray(res.value)){
                this.categories = res.value;
                console.log(res);
            } else{
                console.error("La respuesta no contiene un value que sea un array de categorias", res);
            }
        },
        error => {
            console.error("Error al obtener categorias", error);
        }
    );
   }

   filtrarNotas(){
    if(this.filtroSeleccionado == 'activas'){
        this.noteService.apiNotesGetActiveNotesGet$Json().subscribe(
        (res:any) =>{
            if (res && Array.isArray(res.value)){
                this.notes = res.value;
                console.log(res);
            } else{
                console.error("La respuesta no contiene un value que sea un arrya de notas", res);
            }
        },
        error => {
            console.error("Error al obtener notas activas", error);
        }
    );
    }
    if(this.filtroSeleccionado == 'archivadas'){
        this.noteService.apiNotesGetArchivedNotesGet$Json().subscribe(
        (res:any) =>{
            if (res && Array.isArray(res.value)){
                this.notes = res.value;
                console.log(res);
            } else{
                console.error("La respuesta no contiene un value que sea un arrya de notas", res);
            }
        },
        error => {
            console.error("Error al obtener notas archivadas", error);
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
            this.noteService.apiNotesGetNotesByCategoryNameGet$Json({name: this.categoriaSeleccionada.name}).subscribe(
            (res:any) =>{
                    this.notes = res.value;
                    console.log(res);
            },
            error => {
                console.error("Error al obtener notas filtradas", error);
            }
        ); 
        }
    }

    verCategorias(){
        this.router.navigate(['/category']);
    }
}
