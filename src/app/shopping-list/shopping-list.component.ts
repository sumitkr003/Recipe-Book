import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('apple',10),
    new Ingredient('tomatoes',5)
  ];

  constructor() { }

  ngOnInit() {
  }

  AddIngredient(IngredientToBeAdded: Ingredient){
    console.log(IngredientToBeAdded);
    this.ingredients.push(IngredientToBeAdded);
  }
}
