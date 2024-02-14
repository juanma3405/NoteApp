import { Component, Input, Output, EventEmitter, Inject} from '@angular/core';
import { NoteService} from '../src/app/api/services';
import {Router} from '@angular/router';
import {AddCategoryDto, NoteDtoConCategories} from'../src/app/api/models';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  styleUrls: ['./category-popup.component.css']
})
export class CategoryPopupComponent {
  @Input() categorias: any[] = [];
  @Output() guardarCategoriasEvent = new EventEmitter<any[]>();
  @Input() note: NoteDtoConCategories = { };
  public categoriesId: number[] =[];
  public addCategoryDto: AddCategoryDto;
  

  public constructor(private noteService: NoteService, private router:Router, @Inject(MAT_DIALOG_DATA) public data: any
  , private dialogRef: MatDialogRef<CategoryPopupComponent>){
    this.addCategoryDto = {};
  }

  guardarCategorias() {
    const categoriasSeleccionadas = this.categorias.filter(category => category.selected);
    this.guardarCategoriasEvent.emit(categoriasSeleccionadas);

    categoriasSeleccionadas.forEach(item => this.categoriesId.push(item.id))
    this.addCategoryDto = {idCategories: this.categoriesId, note: this.note}
    this.noteService.apiNotesAddCategoryPut({body: this.addCategoryDto}).subscribe(
         res =>{
             console.log("Se guardaron las categorias a la nota");
            }, 
        error => {
            console.error("Error al guardar categorias: ", error);
        }
    );
    this.dialogRef.close();
    this.router.navigate(['/note']);
  }

  onChange(categoria: any): void{
    categoria.selected = !categoria.selected;
  }

  ngOnInit(){
    this.note = this.data.note;
    this.categorias = this.data.categorias;
  }
}