import { Component } from '@angular/core';
import { CategoryService } from '../src/app/api/services';
import { CategoryDto } from '../src/app/api/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  public category: CategoryDto;

  public constructor(private categoryService: CategoryService, private router: Router){
    this.category = { name: ''};

  }

  createCategory(){
    this.categoryService.apiCategoriesCreateCategoryPost({body: this.category}).subscribe({
            error: (e) => console.error('Error al crear categoria'+ e),
            complete:() => console.info('Categoria creada')
        }
    );
    this.router.navigate(['/category']);
  }

  cancelar(){
    this.router.navigate(['/category']);
  }
}