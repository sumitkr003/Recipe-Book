import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {createViewChild} from "@angular/compiler/src/core";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newingredient = new Ingredient(ingName, ingAmount)
    this.IngredientAdded.emit(newingredient);
  }

}
