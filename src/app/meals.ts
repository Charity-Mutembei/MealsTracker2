export class Meals {
    id!: number;
   name!: string;
   hour!: string;
   meal!: string;
   calories!: number;
   date: number;

   constructor(id:number, name:string, 
    hour:string, meal:string, calories:number, date: number){
        this.id = id;
        this.name = name;
        this.hour = hour;
        this.meal = meal;
        this.calories = calories;
        this.date = date;
    }

}
