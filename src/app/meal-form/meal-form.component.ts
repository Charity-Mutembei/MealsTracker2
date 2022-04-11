import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals'
// above, a created class called meals has been imported in 

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
  newMeal = new Meals (0, "", "", "", 0,0);


  constructor() { }

  ngOnInit(): void {
  }

}
