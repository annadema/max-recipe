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
      title: 'Torta Mimosa',
      imageUrl:
        'https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Torta-mimosa-5008.jpg',
      ingredients: ['5 uova (medie)', '135 g zucchero', '80 g farina 00'],
    },
    {
      id: 'r3',
      title: 'Torta al cioccolato',
      imageUrl:
        'https://www.giallozafferano.it/images/243-24376/Torta-al-cioccolato_450x300.jpg',
      ingredients: [
        'Cioccolato fondente al 55% 150 g',
        'Zucchero 150 g',
        'Farina 00 150 g',
      ],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string | null) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      })!,
    };
  }
}
