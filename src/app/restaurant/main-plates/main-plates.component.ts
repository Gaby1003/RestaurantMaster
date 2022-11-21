import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-plates',
  templateUrl: './main-plates.component.html',
  styleUrls: ['./main-plates.component.css']
})
export class MainPlatesComponent implements OnInit {

  datas: any[] = []
  path: string | null = ''

  constructor(private aRoute: ActivatedRoute,
    private router: Router,) {
      this.path = this.router.url;
      console.log(this.path)
      if(this.path === '/restaurant/menu/main-plates'){
        this.isMainPlate()
      } else if(this.path === '/restaurant/menu/accompaniment'){
        this.isAccompaniment()
      } else if(this.path === '/restaurant/menu/beverages'){
        this.isBeverages()
      } else if(this.path === '/restaurant/menu/entries'){
        this.isEntry()
      }
  }

  ngOnInit(): void {


  }

  isMainPlate(){
    this.datas = [
      {"name" :"Plato 1",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "20000",
      "img": "assets/Images/food.png"},
      {"name" :"Plato 2",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "5000",
      "img": "assets/Images/food.png"},
      {"name" :"Plato 3",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "15000",
      "img": "assets/Images/food.png"},
      {"name" :"Plato 4",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "30000",
      "img": "assets/Images/food.png"},
      {"name" :"Plato 5",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "22000",
      "img": "assets/Images/food.png"}
    ]
  }

  isAccompaniment(){
    this.datas = [
      {"name" :"Acompañamiento 1",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "20000",
      "img": "assets/Images/food.png"},
      {"name" :"Acompañamiento 2",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "5000",
      "img": "assets/Images/food.png"},
      {"name" :"Acompañamiento 3",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "15000",
      "img": "assets/Images/food.png"},
      {"name" :"Acompañamiento 4",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "30000",
      "img": "assets/Images/food.png"}
    ]
  }

  isBeverages(){
    this.datas = [
      {"name" :"Bebida 1",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "20000",
      "img": "assets/Images/food.png"},
      {"name" :"Bebida 2",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "5000",
      "img": "assets/Images/food.png"},
      {"name" :"Bebida 3",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "15000",
      "img": "assets/Images/food.png"}
    ]
  }

  isEntry(){
    this.datas = [
      {"name" :"Entrada 1",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "20000",
      "img": "assets/Images/food.png"},
      {"name" :"Entrada 2",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "5000",
      "img": "assets/Images/food.png"},
      {"name" :"Entrada 3",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "price": "15000",
      "img": "assets/Images/food.png"}
    ]
  }

}
