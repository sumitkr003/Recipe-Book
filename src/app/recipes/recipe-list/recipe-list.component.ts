import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','this is a simple test recipe ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOEcN1PmX8lcsBarl0M_ERjXvqL0ctygJoZjl9P7HX4Pk_hoVng'),
    new Recipe('Test Recipe','this is a simple test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOEcN1PmX8lcsBarl0M_ERjXvqL0ctygJoZjl9P7HX4Pk_hoVng'),
    new Recipe('Test Recipe','this is a simple test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOEcN1PmX8lcsBarl0M_ERjXvqL0ctygJoZjl9P7HX4Pk_hoVng')
  ];

  constructor() { }

  ngOnInit() {
  }

}
