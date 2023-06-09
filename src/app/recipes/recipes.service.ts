import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Bucconotti',
      imageUrl:
        'https://blog.giallozafferano.it/melacannellaefantasia/wp-content/uploads/2019/10/bocconotti-abruzzesi.jpg',
      ingredients: ['6 uova', '300 g farina', '150 g zucchero'],
    },
    {
      id: 'r2',
      title: 'Grispelle',
      imageUrl:
        'https://www.mangiarebuono.it/wp-content/uploads/2015/12/grispelle-calabresi.jpg',
      ingredients: [
        '500 g patate',
        '500 g farina',
        '1 cubetto lievito di birra',
      ],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      })!,
    };
  }
}
