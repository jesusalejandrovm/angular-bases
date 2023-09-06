import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  public mostrarBtnName:boolean = true;
  public mostrarBtnAge:boolean= true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(nameChange:string):void{
    this.name = nameChange;
    this.mostrarBtnName = false;
  }

  changeAge(ageChange:number):void{
    this.age = ageChange;
    this.mostrarBtnAge = false;
  }

  resetForm(){
    this.name = 'ironman';
    this.age = 45;
    this.mostrarBtnName = true;
    this.mostrarBtnAge = true;

  }
}
