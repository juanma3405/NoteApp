import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../src/app/api/services';
import { CategoryDto } from '../src/app/api/models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  public categories: CategoryDto[];
  public subscription: Subscription = new Subscription();
  

  public constructor(private categoryService: CategoryService, private router: Router){
    this.categories = [];
    this.cargarCategories();
  }

   cargarCategories(){
     this.categoryService.apiCategoriesGetCategoriesGet$Json().subscribe({
            next: (response: any) => this.categories = response.value,
            error: (e) => console.error(e),
            complete:() => console.info('complete')
        })
  }

  eliminarCategory(id?: number){
    if (id !== undefined){
    this.categoryService.apiCategoriesDeleteCategoryIdDelete({id}).subscribe({
            error: (e) => console.error(e),
            complete:() => console.info('Se elimino categoria')
        }
    );
    }
    this.cargarCategories(); 
  }

  crearCategory(){
    console.log("Entro a crear nota");
    this.router.navigate(['/createCategory'])
  }

  volverANotas(){
    this.router.navigate(['/note'])
  }

  ngOnInit(): void {
    this.subscription = this.categoryService.refresh$.subscribe(() => {
      this.cargarCategories();
    });
  }
}